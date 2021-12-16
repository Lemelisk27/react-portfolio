import React, {useState} from "react";
import Auth from "../utils/Auth"
import API from "../utils/API";

function ChangePassword (props) {
    const token = Auth.getToken()
    const [passwordError, setPasswordError] = useState(false)
    const [newPasswordError, setNewPasswordError] = useState(false)
    const [diffPassError, setDiffPassError] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState("")
    const [confirmPassError, setConfirmPassError] = useState(false)
    const [user, setUser] = useState({
        username: props.user.username,
        password: "",
        new_password: ""
    })

    const cancelBtn = (e) => {
        e.preventDefault()
        props.setShowPassModal(false)
    }

    const handleInputChange = (e) => {
        if (e.target.name === "password") {
            setUser({
                ...user,
                password: e.target.value
            })
        }
        if (e.target.name === "new_password") {
            setUser({
                ...user,
                new_password: e.target.value
            })
        }
        if (e.target.name === "confirmPassword") {
            setConfirmPassword(e.target.value)
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        clearErrors()
        if (user.password === "" || user.password === null) {
            setPasswordError(true)
            return
        }
        if (user.new_password === "" || user.new_password === null) {
            setNewPasswordError(true)
            return
        }
        if (user.new_password === user.password) {
            setDiffPassError(true)
            return
        }
        if (user.new_password !== confirmPassword) {
            setConfirmPassError(true)
            return
        }
        API.changePassword(user,token)
        .then(res=>{
            console.log(res)
            props.setShowPassModal(false)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const clearErrors = () => {
        setPasswordError(false)
        setNewPasswordError(false)
        setDiffPassError(false)
        setConfirmPassError(false)
    }

    return (
        <form className="d-flex flex-column" onSubmit={handleFormSubmit}>
            <div className="d-flex flex-column col-6 mx-auto">
                <label>Current Password</label>
                <input type="password" name="password" value={user.password} onChange={handleInputChange}></input>
                {passwordError && (
                    <p className="text-danger mb-0">Please Enter Your Password</p>
                )}
            </div>
            <div className="d-flex flex-column col-6 mx-auto">
                <label>New Password</label>
                <input type="password" name="new_password" value={user.new_password} onChange={handleInputChange}></input>
                {newPasswordError && (
                    <p className="text-danger mb-0">Please Enter a new Password</p>
                )}
                {diffPassError && (
                    <p className="text-danger mb-0">Password Cannot be the Same as your Current Password</p>
                )}
            </div>
            <div className="d-flex flex-column col-6 mx-auto">
                <label>Confirm New Password</label>
                <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleInputChange}></input>
                {confirmPassError && (
                    <p className="text-danger mb-0">The Passwords Must Match</p>
                )}
            </div>
            <div className="d-flex flex-row justify-content-around mt-3">
                <button className="bg-black text-light rounded col-3" onClick={handleFormSubmit}>Submit</button>
                <button className="bg-black text-light rounded col-3" onClick={cancelBtn}>Cancel</button>
            </div>
        </form>
    )
}

export default ChangePassword