import React from "react";
import "./style.css"

function Navbar (props) {
    const user = props.user

    return (
        <div className="zs-nav d-flex flex-row flex-wrap col-12 justify-content-between">
        <h1 className="d-flex align-items-center mx-4">{user.first_name} {user.last_name}</h1>
        <div className="d-flex align-items-center mx-4 col-lg-4 col-sm-12 justify-content-between">
            <a href="/" className="mx-1">About</a>
            <a href="/portfolio" className="mx-1">Portfolio</a>
            <a href="/contact" className="mx-1">Contact</a>
            <a href="/resume" className="mr-1">Resume</a>
        </div>
    </div>
    )
}

export default Navbar