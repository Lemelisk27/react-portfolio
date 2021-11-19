import React from "react";

function Contact () {
    return (
        <div className="d-flex flex-column col-6 mx-auto mt-5">
            <label for="contactName">Your Name</label>
            <input type="text" id="contactName" className="col-6"></input>
            <label for="contactEmail">Your Email</label>
            <input type="text" id="contactEmail" className="col-6"></input>
            <label for="contactMessage">Message</label>
            <textarea name="contactMessage" id="contactMessage" cols="30" rows="10"></textarea>
            <button id="submitBtn" className="col-2 mx-auto mt-5 rounded border-0">Submit</button>
        </div>
    )
}

export default Contact