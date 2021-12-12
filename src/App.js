import React, {Fragment, useState, useEffect} from "react";
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom"
import API from "./utils/API"
import Navbar from "./pages/Navbar/Navbar";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home"
import Contact from "./pages/Contact/Contact"
import Resume from "./pages/Resume/Resume"
import Portfolio from "./pages/Portfolio/Portfolio";
import Error from "./pages/Error/Error"

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
                    <Route path="*" element={<Error />}/>
                </Routes>
            </Fragment>
        </Router>
    )
}

export default App;
