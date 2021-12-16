import React, {Fragment, useState, useEffect} from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import AuthRoute from "./utils/AuthRoute";
import API from "./utils/API"
import Navbar from "./pages/Navbar/Navbar";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home"
import Contact from "./pages/Contact/Contact"
import Resume from "./pages/Resume/Resume"
import Portfolio from "./pages/Portfolio/Portfolio";
import Error from "./pages/Error/Error"
import Login from "./pages/Login/Login"
import AdminNav from "./pages/AdminNav/AdminNav"
import EditProfile from "./pages/EditProfile/EditProfile"
import EditPortfolio from "./pages/EditPortfolio/EditPortfolio";
import EditResume from "./pages/EditResume/EditResume";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails"

const App = () => {
    const [user, setUser] = useState({})

    useEffect(()=>{
        API.getUsers()
        .then(res=>{
            setUser(res.data[0])
        })
        .catch(err=>{
            console.log(err)
        })
        // eslint-disable-next-line
    },[])

    return (
        <Router>
            <Fragment>
                <Routes>
                    <Route exact path="/" element={
                        <>
                            <Navbar user={user}/>
                            <Home />
                            <Footer />
                        </>
                    }/>
                    <Route exact path = "/contact" element={
                        <>
                            <Navbar user={user}/>
                            <Contact />
                            <Footer />
                        </>
                    }/>
                    <Route exact path="/resume" element={
                        <>
                            <Navbar user={user}/>
                            <Resume />
                            <Footer />
                        </>
                    }/>
                    <Route exact path="/portfolio" element={
                        <>
                            <Navbar user={user}/>
                            <Portfolio />
                            <Footer />                        
                        </>
                    }/>
                    <Route exact path="/login" element={<Login />}/>
                    <Route exaxt path="/editprofile" element={<AuthRoute/>}>
                        <Route exact path="/editprofile" element={
                            <>
                                <AdminNav />
                                <EditProfile />
                            </>
                        }/>
                    </Route>
                    <Route exaxt path="/editportfolio" element={<AuthRoute/>}>
                        <Route exact path="/editportfolio" element={
                            <>
                                <AdminNav />
                                <EditPortfolio />
                            </>
                        }/>
                    </Route>
                    <Route exaxt path="/editportfolio/:id" element={<AuthRoute/>}>
                        <Route exact path="/editportfolio/:id" element={
                            <>
                                <AdminNav />
                                <ProjectDetails />
                            </>
                        }/>
                    </Route>
                    <Route exaxt path="/editresume" element={<AuthRoute/>}>
                        <Route exact path="/editresume" element={
                            <>
                                <AdminNav />
                                <EditResume />
                            </>
                        }/>
                    </Route>
                    <Route path="*" element={<Error />}/>
                </Routes>
            </Fragment>
        </Router>
    )
}

export default App;
