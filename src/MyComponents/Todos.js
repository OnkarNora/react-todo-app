import React from 'react'
import { TodoItem } from './TodoItem'

function Todos (props) {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    console.log(" Todos of Todos.js  are : ",props.todos);

    return (
        <div className="container my-3" style={myStyle}>
            <h3 className="my-3">Todos List</h3>
            {props.todos.length === 0 ? "Work is Done ! " :
                props.todos.map((todo) => {
                    return ( <TodoItem todo={todo} key={todo.id} onDelete={props.onDelete} /> )
                })
            }

        </div>
    )
}

export default Todos;