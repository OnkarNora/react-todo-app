import { waitForElementToBeRemoved } from '@testing-library/react';
import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import AddTodo from './AddTodo';
import Todos from './Todos';


function HomeUser() {

    /**/
    
    const history = useHistory();
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        if(!localStorage.getItem('user-info')){
            history.push('./');
        }
        if(localStorage.getItem('user-info')){
            getTodos();
        }
        
    },[])

    async function getTodos(){
        
        let user = JSON.parse(localStorage.getItem('user-info'));
        let user_id = {
            user_id:user.id
        }
        
        let result = await fetch("http://127.0.0.1:8000/api/todos/getTodos",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(user_id)
        })
        result = await result.json();   
        
        let apiTodos = []
        
        result.forEach((element,key) => {
            let t = {
                id:key,
                d_id:element.id,
                title:element.Title,
                desc:element.Description
            }
            apiTodos.push(t);
            
            
        });
        console.log("api todos : ",apiTodos);
        setTodos(apiTodos);
        
        // console.log("normal todos are : ",JSON.parse(localStorage.getItem('todos')))
        console.log(" Todos are : ",todos);
        localStorage.setItem('todos', JSON.stringify(apiTodos));
        
    }
    
    /**/
    const onDelete = (todo) => {
        // console.log("I am on delete of todo ", todo);
        // Deleting this way in react does not work
        // let index = todos.indexOf(todo);
        // todos.splice(index, 1);
    
        setTodos(todos.filter((e) => {
            return e !== todo;
        }));
        localStorage.setItem('todos', JSON.stringify(todos));

        deleteApiTodo(todo);

    }

    async function deleteApiTodo(todo){
        let d_todo = {
            d_id :todo.d_id
        }
        let result = await fetch("http://127.0.0.1:8000/api/todos/deleteTodo",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(d_todo)
        })
        result = await result.json();
        console.log("Deleted Todo : ",todo);
    }

    const addTodo = (title, desc) => {
        addTodoToApi(title,desc);
    }
    
    async function addTodoToApi(title,desc){
        const apiTodo = {
            user_id:JSON.parse(localStorage.getItem('user-info')).id,
            Title: title,
            Description: desc,
        }
        console.log('api todos : ',apiTodo)
        let result = await fetch("http://127.0.0.1:8000/api/todos/insertTodos",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(apiTodo)
        })
        result = await result.json();
        getTodos();
    }

    
    return (
        <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
        </>
    )
}
export default HomeUser;