import React, {useState} from "react";
import "./style.css"
import API from "../../utils/API"
import Auth from "../../utils/Auth"

function Login () {
    const [userError, setUserError] = useState(false)
    const [passError, setPassError] = useState(false)
    const [loginError, setLoginError] = useState(false)
    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const handleInputChange = (e) => {
        if (e.target.name === "username") {
            setUser({
                ...user,
                username: e.target.value
            })
        }
        if (e.target.name === "password") {
            setUser({
                ...user,
                password: e.target.value
            })
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setUserError(false)
        setPassError(false)
        setLoginError(false)
        if (user.username === "" || user.username === null) {
            setUserError(true)
            return
        }
        if (user.password === "" || user.password === null) {
            setPassError(true)
            return
        }
        API.Login(user)
        .then(res=>{
            console.log(res.data)
            if (res.status !== 200) {
                setLoginError(true)
                return
            }
            localStorage.setItem("token", res.data.token)
            const userData = {
                id: res.data.user.id,
                username: res.data.user.username
            }
            Auth.saveUser(userData)
            setUser({
                ...user,
                username: "",
                password: ""
            })
            window.location.href = "/editprofile"
        })
        .catch(err=>{
            console.log(err)
            setLoginError(true)
        })
    }

    return (
        <div className="d-flex flex-column zs-login">
            <form className="d-flex flex-column mx-auto col-3 my-auto" onSubmit={handleFormSubmit}>
                <h1 className="text-center">Please Login</h1>
                <div className="d-flex flex-column">
                    <label>Username</label>
                    <input type="text" name="username" value={user.username} onChange={handleInputChange}></input>
                    {userError && (
                        <p className="bg-white text-danger mb-0 mt-1 text-center rounded col-6 mx-auto">A Username is Required</p>
                    )}
                </div>
                <div className="d-flex flex-column">
                    <label>Password</label>
                    <input type="password" name="password" value={user.password} onChange={handleInputChange}></input>
                    {passError && (
                        <p className="bg-white text-danger mb-0 mt-1 text-center rounded col-6 mx-auto">A Password is Required</p>
                    )}
                </div>
                <button className="col-3 mx-auto mt-3 rounded" onClick={handleFormSubmit}>Submit</button>
                {loginError && (
                    <p className="bg-white text-danger mb-0 mt-3 text-center rounded col-10 mx-auto">The Username or Password was Incorrect</p>
                )}
            </form>
        </div>
    )
}

export default Login