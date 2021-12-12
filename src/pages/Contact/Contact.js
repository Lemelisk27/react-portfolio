import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers"
import emailjs from "emailjs-com"
import "./style.css"

function Contact () {
    const [contactName, setContactName] = useState('')
    const [contactEmail, setContactEmail] = useState('')
    const [contactMessage, setContactMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [messageError, setMessgeError] = useState('')
    const [sentMessage, setSentMessage] = useState(false)

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
        if (!contactMessage) {
            setMessgeError('A Message is Required')
            return
        }
        const mailOptions = {
            from_name: contactName,
            message: contactMessage,
            reply_to: contactEmail
        }
        emailjs.send(process.env.REACT_APP_SERVICE, process.env.REACT_APP_TEMPLATE, mailOptions, process.env.REACT_APP_USER_ID)
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
        setSentMessage(!sentMessage)
        setContactName('')
        setContactEmail('')
        setContactMessage('')
    }

    return (
        <div className="zs-contact d-flex flex-column col-12 overflow-auto">
        <form className="d-flex flex-column col-lg-6 col-11 mx-auto mt-5 form" onSubmit={handleFormSubmit}>
            <label>Your Name</label>
            <input
                value={contactName}
                name="contactName"
                onChange={handleInputChange}
                type="text"
                id="contactName"
                className="col-lg-6">
            </input>
            <label>Your Email</label>
            <input
                value={contactEmail}
                name="contactEmail"
                onChange={handleInputChange}
                type="text"
                id="contactEmail"
                className="col-lg-6">
            </input>
            {errorMessage && (
                <>
                <p className="bg-light text-danger rounded col-lg-5 col-9 text-center px-2 my-2">{errorMessage}</p>
                </>
            )}
            <label>Message</label>
            <textarea
                value={contactMessage}
                onChange={handleInputChange}
                name="contactMessage"
                id="contactMessage"
                cols="30"
                rows="10">
            </textarea>
            {messageError && (
                <>
                <p className="bg-light text-danger rounded col-lg-5 col-9 text-center px-2 my-2">{messageError}</p>
                </>
            )}
            <button id="submitBtn" className="col-4 col-lg-2 mx-auto mt-5 rounded border-0">Submit</button>
            {sentMessage && (
                <>
                <p className="text-center mt-3">Your message has been sent. I will contact you as soon as I can.</p>
                </>
            )}
        </form>
        </div>
    )
}

export default Contact