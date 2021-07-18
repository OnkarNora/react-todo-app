
import './App.css';
import Header from "./MyComponents/Header";
// import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
// import { AddTodo } from "./MyComponents/AddTodo"
import { Login } from "./MyComponents/Login"
// import { useState, useEffect } from 'react';
import Register from './MyComponents/Register';
import Home from './MyComponents/Home';
// import { useHistory } from 'react-router-dom';
import HomeUser from './MyComponents/HomeUser';

import React from "react";
import {BrowserRouter as Router, Switch ,Route } from "react-router-dom";

function App() {
    
    return (
        <>
            <Router>

                <Switch>
                    <Route path="/home" >
                        <HomeUser />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/">
                        <>
                        <Header title={localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).name : "MyTodosList" } searchBar={false} active="Home" />
                        <Home />
                        </>
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;
