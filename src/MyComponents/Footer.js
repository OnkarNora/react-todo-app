import React from 'react';
// import {Link} from 'react-router-dom';
// import './footer.css'

export const Footer = () => {
    let footerStyle = {
        position: "relative",
        width: "100%",
    }
    return (
        <footer className="bg-dark text-light py-3" style={footerStyle}>
            <p className="text-center">Contact Me on <a className="btn btn-primary btn-sm " href="https://www.linkedin.com/in/onkar-nora-6585a41ab/" >Linked in</a></p>
        </footer>
    )
}
