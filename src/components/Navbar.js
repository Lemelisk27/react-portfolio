import React from "react";

const styles = {
    nav: {
        height: "100px"
    }
}

function Navbar () {
    return (
        <div className="zs-nav d-flex flex-row col-12 justify-content-between align-self-start" style={styles.nav}>
        <h1 className="d-flex align-items-center mx-4">Zach Smith</h1>
        <div className="d-flex align-items-center mx-4 col-4 justify-content-between">
            <a href="#about" className="mx-1">About Me</a>
            <a href="#portfolio" className="mx-1">Portfolio</a>
            <a href="#contact" className="mx-1">Contact</a>
            <a href="#resume" className="mr-1">Resume</a>
        </div>
    </div>
    )
}

export default Navbar