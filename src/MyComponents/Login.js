import React,{useState,useEffect} from 'react';
import Header from './Header';
import {useHistory} from 'react-router-dom';


export const Login = () => {
    useEffect(()=>{
        if(localStorage.getItem('user-info') ){
            history.push('./');
        }
    },[])
    let myStyle = {
        minHeight: "82vh"
    }
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const history = useHistory();

    async function login()
    {
        let user = {email,password};
        console.log(user);
        let result = await fetch("https://laravel-todo-backend.herokuapp.com/api/login",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(user)
        })
        result = await result.json();
        if(!result.email){
            console.log("failed logging user");
            setError("Email or Password Not matched");
        }
        else{
            localStorage.setItem('user-info',JSON.stringify(result));
            console.log("User logged in : ",result.email);
            history.push('./home');
        }
    }
    

    return (
        <div className="App" style={myStyle}>
            <Header title={localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).name : "MyTodosList" } searchBar={false} active="Login"/>
            <h1>Login Page</h1>
            <div className="col-sm-6 offset-sm-3" >
                <input type="text" className="form-control" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" /><br /><br />
                <input type="text" className="form-control" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" /><br /><br />
                <button className="btn btn-primary btn-dark" onClick={login} >Login</button>
            </div>
            <div className="my-3 text-danger font-weight-bold h5" >{error}</div>
        </div>
    )
}
