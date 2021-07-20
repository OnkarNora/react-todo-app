import React from 'react';
import {useHistory,Link} from 'react-router-dom';
import {useEffect} from 'react';

function Home (){
    
    const history = useHistory();
    useEffect(()=>{if(localStorage.getItem('user-info')){
        history.push('./home');
    }},[]);
    let myStyle={
        minHeight:"90vh",
        backgroundImage:"url('https://source.unsplash.com/BlIhVfXbi9s/1600x900')"
        
    }
    return (
        <div style={myStyle} className="App" >
            <div className="home"  ><div style={{margin:"15vh"}} ><p style={{fontSize:"50px",fontFamily:"sans-serif"}} >Welcome, </p><p style={{fontSize:"35px"}}  >This is a Todo Application Developed in React </p><p style={{fontSize:"35px"}} >Please Register to use</p> <Link to="/register" className="btn btn-primary" >Register</Link> </div></div>
            <div className="home" style={{width:"50%"}} ></div>
        </div>
    )
}
export default Home;