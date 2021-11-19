import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers"

function Contact () {
    const [contactName, setContactName] = useState('')
    const [contactEmail, setContactEmail] = useState('')
    const [contactMessage, setContactMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleInputChange = (e) => {
        const { target } = e
        const inputType = target.name
        const inputValue = target.value

        if (inputType === 'contactName') {
            setContactName(inputValue)
        } else if (inputType === 'contactEmail') {
            setContactEmail(inputValue)
        } else if (inputType === 'contactMessage') {
            setContactMessage(inputValue)
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        if (!validateEmail(contactEmail) || !contactName) {
            setErrorMessage('The Name or Email is Invalid')
            return
        }
        setContactName('')
        setContactEmail('')
        setContactMessage('')
        alert(`Name: ${contactName}, Email: ${contactEmail}, Message: ${contactMessage}`)
    }

    return (
        <form className="d-flex flex-column col-6 mx-auto mt-5 form" onSubmit={handleFormSubmit}>
            <label for="contactName">Your Name</label>
            <input
                value={contactName}
                name="contactName"
                onChange={handleInputChange}
                type="text"
                id="contactName"
                className="col-6">
            </input>
            <label for="contactEmail">Your Email</label>
            <input
                value={contactEmail}
                name="contactEmail"
                onChange={handleInputChange}
                type="text"
                id="contactEmail"
                className="col-6">
            </input>
            {errorMessage && (
                <>
                <p class="bg-light text-danger rounded col-5 text-center px-2 my-2">{errorMessage}</p>
                </>
            )}
            <label for="contactMessage">Message</label>
            <textarea
                value={contactMessage}
                onChange={handleInputChange}
                name="contactMessage"
                id="contactMessage"
                cols="30"
                rows="10">
            </textarea>
            <button id="submitBtn" className="col-2 mx-auto mt-5 rounded border-0">Submit</button>
        </form>
    )
}

export default Contact