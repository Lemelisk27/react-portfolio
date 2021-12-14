import React from "react";
import "./style.css"

function Error () {
    return (
        <div className="zs-error">
            <div className="d-flex flex-column col-10 mx-auto pt-5">
                <h1 className="text-center">Error 404, Page not Found</h1>
                <a className="text-center text-light" href="/">Go Home</a>
            </div>
        </div>
    )
}

export default Error