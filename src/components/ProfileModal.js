import React, {useState} from "react";
import Auth from "../utils/Auth"
import API from "../utils/API";

function ProfileModal (props) {
    const token = Auth.getToken()
    const [firstNameError, setFirstNameError] = useState(false)
    const [lastNameError, setLastNameError] = useState(false)
    const [streetError, setStreetError] = useState(false)
    const [cityError, setCityError] = useState(false)
    const [stateError, setStateError] = useState(false)
    const stateVal = /^([A-z]{2})$/
    const [validState, setValidState] = useState(false)
    const [zipError, setZipError] = useState(false)
    const zipVal = /^[0-9]{5}[-]?([0-9]{4})?$/
    const [validZip, setValidZip] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const phoneVal = /^\(?([0-9]{3})\)?[-.]?([0-9]{3})[-.]?([0-9]{4})$/
    const [validPhone, setValidPhone] = useState(false)
    const [emailError, setEmailError] = useState(false)
    // eslint-disable-next-line
    const emailVal = /^[A-z0-9_\.-]+@[\dA-z\.-]+\.[A-z\.]{2,6}$/
    const [validEmail, setValidEmail] = useState(false)
    const [githubError, setGitHubError] = useState(false)
    const [linkedinError, setLinkedinError] = useState(false)
    const [portfolioError, setPortfolioError] = useState(false)
    const [aboutError, setAboutError] = useState(false)
    const [user, setUser] = useState({
        id: props.user.id,
        about: props.user.about,
        city: props.user.city,
        email: props.user.email,
        first_name: props.user.first_name,
        github: props.user.github,
        last_name: props.user.last_name,
        linkedin: props.user.linkedin,
        phone: props.user.phone,
        portfolio: props.user.portfolio,
        state: props.user.state,
        street: props.user.street,
        zip: props.user.zip
    })

    const handleInputChange = (e) => {
        if (e.target.name === "first_name") {
            setUser({
                ...user,
                first_name: e.target.value
            })
        }
        if (e.target.name === "last_name") {
            setUser({
                ...user,
                last_name: e.target.value
            })
        }
        if (e.target.name === "street") {
            setUser({
                ...user,
                street: e.target.value
            })
        }
        if (e.target.name === "city") {
            setUser({
                ...user,
                city: e.target.value
            })
        }
        if (e.target.name === "state") {
            setUser({
                ...user,
                state: e.target.value
            })
        }
        if (e.target.name === "zip") {
            setUser({
                ...user,
                zip: e.target.value
            })
        }
        if (e.target.name === "phone") {
            setUser({
                ...user,
                phone: e.target.value
            })
        }
        if (e.target.name === "email") {
            setUser({
                ...user,
                email: e.target.value
            })
        }
        if (e.target.name === "github") {
            setUser({
                ...user,
                github: e.target.value
            })
        }
        if (e.target.name === "linkedin") {
            setUser({
                ...user,
                linkedin: e.target.value
            })
        }
        if (e.target.name === "portfolio") {
            setUser({
                ...user,
                portfolio: e.target.value
            })
        }
        if (e.target.name === "about") {
            setUser({
                ...user,
                about: e.target.value
            })
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        resetErrors()
        if (user.first_name === "" || user.first_name === null) {
            setFirstNameError(true)
            return
        }
        if (user.last_name === "" || user.last_name === null) {
            setLastNameError(true)
            return
        }
        if (user.street === "" || user.street === null) {
            setStreetError(true)
            return
        }
        if (user.city === "" || user.city === null) {
            setCityError(true)
            return
        }
        if (user.state === "" || user.state === null) {
            setStateError(true)
            return
        }
        if (!stateVal.test(user.state)) {
            setValidState(true)
            return
        }
        if (user.zip === "" || user.zip === null) {
            setZipError(true)
            return
        }
        if (!zipVal.test(user.zip)) {
            setValidZip(true)
            return
        }
        if (user.phone === "" || user.phone === null) {
            setPhoneError(true)
            return
        }
        if (!phoneVal.test(user.phone)) {
            setValidPhone(true)
            return
        }
        if (user.email === "" || user.email === null) {
            setEmailError(true)
            return
        }
        if (!emailVal.test(user.email)) {
            setValidEmail(true)
            return
        }
        if (user.github === "" || user.github === null) {
            setGitHubError(true)
            return
        }
        if (user.linkedin === "" || user.linkedin === null) {
            setLinkedinError(true)
            return
        }
        if (user.portfolio === "" || user.portfolio === null) {
            setPortfolioError(true)
            return
        }
        if (user.about === "" || user.about === null) {
            setAboutError(true)
            return
        }
        API.editUser(user,token)
        .then(res=>{
            console.log(res)
            props.setShowEditModal(false)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const cancelBtn = (e) => {
        e.preventDefault()
        props.setShowEditModal(false)
    }

    const resetErrors = () => {
        setFirstNameError(false)
        setLastNameError(false)
        setStreetError(false)
        setCityError(false)
        setStateError(false)
        setValidState(false)
        setZipError(false)
        setValidZip(false)
        setPhoneError(false)
        setValidPhone(false)
        setEmailError(false)
        setValidEmail(false)
        setGitHubError(false)
        setLinkedinError(false)
        setPortfolioError(false)
        setAboutError(false)
    }

    return (
        <div className="d-flex flex-column">
            <div className="d-flex flex-row">
                <div className="d-flex flex-column col-6 px-1 py-2">
                    <label>First Name</label>
                    <input type="text" name="first_name" value={user.first_name} onChange={handleInputChange}></input>
                    {firstNameError && (
                        <p className="text-danger mb-0">A First Name is Required</p>
                    )}
                </div>
                <div className="d-flex flex-column col-6 px-1 py-2">
                    <label>Last Name</label>
                    <input type="text" name="last_name" value={user.last_name} onChange={handleInputChange}></input>
                    {lastNameError && (
                        <p className="text-danger mb-0">A Last Name is Required</p>
                    )}
                </div>
            </div>
            <div className="d-flex flex-column">
                <div className="d-flex flex-column col-12 px-1 py-2">
                    <label>Street</label>
                    <input type="text" name="street" value={user.street} onChange={handleInputChange}></input>
                    {streetError && (
                        <p className="text-danger mb-0">A Street is Required</p>
                    )}
                </div>
                <div className="d-flex flex-row">
                    <div className="d-flex flex-column col-7 px-1 py-2">
                        <label>City</label>
                        <input type="text" name="city" value={user.city} onChange={handleInputChange}></input>
                        {cityError && (
                            <p className="text-danger mb-0">A City is Required</p>
                        )}
                    </div>
                    <div className="d-flex flex-column col-1 px-1 py-2">
                        <label>State</label>
                        <input type="text" name="state" value={user.state} onChange={handleInputChange}></input>
                        {stateError && (
                            <p className="text-danger mb-0">Required</p>
                        )}
                        {validState && (
                            <p className="text-danger mb-0">Invalid</p>
                        )}
                    </div>
                    <div className="d-flex flex-column col-4 px-1 py-2">
                        <label>Zip Code</label>
                        <input type="text" name="zip" value={user.zip} onChange={handleInputChange}></input>
                        {zipError && (
                            <p className="text-danger mb-0">A Zip Code is Required</p>
                        )}
                        {validZip && (
                            <p className="text-danger mb-0">The Zip Code is Invalid</p>
                        )}
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row">
                <div className="d-flex flex-column col-6 px-1 py-2">
                    <label>Phone Number</label>
                    <input type="text" name="phone" value={user.phone} onChange={handleInputChange}></input>
                    {phoneError && (
                        <p className="text-danger mb-0">A Phone Number is Required</p>
                    )}
                    {validPhone && (
                        <p className="text-danger mb-0">The Phone Number is Invalid</p>
                    )}
                </div>
                <div className="d-flex flex-column col-6 px-1 py-2">
                    <label>Email</label>
                    <input type="text" name="email" value={user.email} onChange={handleInputChange}></input>
                    {emailError && (
                        <p className="text-danger mb-0">An Email is Required</p>
                    )}
                    {validEmail && (
                        <p className="text-danger mb-0">The Email is Invalid</p>
                    )}
                </div>
            </div>
            <div className="d-flex flex-column col-12 px-1 py-2">
                <label>GitHub Profile</label>
                <input type="text" name="github" value={user.github} onChange={handleInputChange}></input>
                {githubError && (
                    <p className="text-danger mb-0">A GitHub Link is Required</p>
                )}
            </div>
            <div className="d-flex flex-column col-12 px-1 py-2">
                <label>LinkedIn Profile</label>
                <input type="text" name="linkedin" value={user.linkedin} onChange={handleInputChange}></input>
                {linkedinError && (
                    <p className="text-danger mb-0">A LinkedIn Link is Required</p>
                )}
            </div>
            <div className="d-flex flex-column col-12 px-1 py-2">
                <label>Portfolio</label>
                <input type="text" name="portfolio" value={user.portfolio} onChange={handleInputChange}></input>
                {portfolioError && (
                    <p className="text-danger mb-0">A Portfolio Link is Required</p>
                )}
            </div>
            <div className="d-flex flex-column col-12 px-1 py-2">
                <label>About</label>
                <textarea type="text" name="about" rows="5" value={user.about} onChange={handleInputChange}></textarea>
                {aboutError && (
                    <p className="text-danger mb-0">An About Section is Required</p>
                )}
            </div>
            <div className="d-flex flex-row justify-content-around mt-3">
                <button className="bg-black text-light rounded col-3" onClick={handleFormSubmit}>Submit</button>
                <button className="bg-black text-light rounded col-3" onClick={cancelBtn}>Cancel</button>
            </div>
        </div>
    )
}

export default ProfileModal