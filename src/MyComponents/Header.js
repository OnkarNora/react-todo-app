import React from 'react'
import PropTypes from 'prop-types'

// import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function Header(props) {

    const history = useHistory();

    function logout() {
        // alert("logging out");
        localStorage.removeItem('user-info');
        console.log('User logged out');
        history.push('./')
    }
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={props.active === "Home" ? "nav-link active" : "nav-link"} aria-current="page" to="/home">Home</Link>
                        </li>

                        {!localStorage.getItem('user-info')?<><li className="nav-item">
                            <Link className={props.active === "Login" ? "nav-link active" : "nav-link"} to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={props.active === "Register" ? "nav-link active" : "nav-link"} to="/register">Register</Link>
                        </li></>:null}

                    </ul>
                    {localStorage.getItem('user-info') ? <div className="d-flex text-white" ><button onClick={logout} className="btn text-white" >Logout</button></div> : null}

                    {props.searchBar ? <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> : ""}
                </div>
            </div>
        </nav>

    )
}

Header.defaultProps = {
    title: "Your Title Here",
    // searchBar: true
}

Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
}
