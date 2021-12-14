import React from "react";
import "./style.css"
import Auth from "../../utils/Auth"

function AdminNav () {
    return (
        <div className="zs-adminnav d-flex flex-row flex-wrap col-12 justify-content-between">
            <h1 className="d-flex align-items-center mx-4">Admin</h1>
            <div className="d-flex align-items-center mx-4 col-lg-4 col-sm-12 justify-content-between">
                <a href="/editprofile" className="mx-1">Edit Profile</a>
                <a href="/editportfolio" className="mx-1">Edit Portfolio</a>
                <a href="/editresume" className="mx-1">Edit Resume</a>
            </div>
            <div className="d-flex col-1 mx-4 align-items-center">
                <button className="col-12 rounded" onClick={Auth.logout}>LogOut</button>
            </div>
        </div>
    )
}

export default AdminNav