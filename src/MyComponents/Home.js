import React from 'react';
import {useHistory} from 'react-router-dom';
import {useEffect} from 'react';

function Home (){
    
    const history = useHistory();
    useEffect(()=>{if(localStorage.getItem('user-info')){
        history.push('./home');
    }},[]);
    let myStyle={
        minHeight:"75vh"
    }
    return (
        <div style={myStyle} className="App" >
            <h1>Welcome, Please Register to use Todo Application</h1>
        </div>
    )
}
export default Home;