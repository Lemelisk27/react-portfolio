import React from "react";

function Navbar ({ currentPage, handlePageChange }) {
    return (
        <div className="zs-nav d-flex flex-row flex-wrap col-12 justify-content-between">
        <h1 className="d-flex align-items-center mx-4">Zach Smith</h1>
        <div className="d-flex align-items-center mx-4 col-lg-4 col-sm-12 justify-content-between">
            <a href="#home"
                onClick={() => handlePageChange('Home')}
                className="mx-1">About</a>
            <a href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className="mx-1">Portfolio</a>
            <a href="#contact"
                onClick={() => handlePageChange('Contact')}
                className="mx-1">Contact</a>
            <a href="#resume"
                onClick={() => handlePageChange('Resume')}
                className="mr-1">Resume</a>
        </div>
    </div>
    )
}

export default Navbar