import React from "react";
import {Link} from "react-router-dom";
import "../App.css"

function Header() {
    return(
        <React.Fragment>
            <div className="App-header">
                <body className="Company-logo-rotated" /> 
            <header className="Company-name">Company</header>
            <Link to='/home' className="App-link">Home</Link>
            <Link to='/aboutUs'className="App-link">About Us</Link>
            <Link to='/contactUs'className="App-link">Contact Us</Link>
            <button>Log in</button>
            </div>
        </React.Fragment>

    )
}

export default Header;