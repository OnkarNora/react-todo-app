import React,{useState , useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header';

function Register ()
{   
    let myStyle = {
        minHeight: "82vh"
    }

    useEffect(()=>{
        if(localStorage.getItem('user-info') ){
            history.push('./');
        }
    },[])

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const history = useHistory();

    async function register(){
        
        let user = {name,email,password};
        console.log(user);
        // let user = JSON.stringify(user);
        let result = await fetch("http://127.0.0.1:8000/api/register",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(user)
        });
        result = await result.json();
        console.log("save user : ",result);
        localStorage.setItem("user-info",JSON.stringify(result));
        history.push('./home');
    }

    return (
        <div className="App" style={myStyle}>
            <Header title={localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).name : "MyTodosList" } searchBar={false} active="Register" />
            <h1>Hello, Register</h1>
            <div className=" col-sm-6 offset-sm-3">
                <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Enter Name"/><br /><br />
                <input type="text" onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Enter Email"/><br /><br />
                <input type="text" onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Enter Password"/><br /><br />
                <button onClick={register} className="btn btn-success" >Sign up</button>
            </div>
        </div>
    )
}
export default Register;