import React, { Fragment } from "react";
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home"
import Contact from "./pages/Contact/Contact"
import Resume from "./pages/Resume/Resume"
import Portfolio from "./pages/Portfolio/Portfolio";
import Error from "./pages/Error/Error"

const App = () => {
    return (
        <Router>
            <Fragment>
                <Routes>
                    <Route exact path="/" element={
                        <>
                            <Navbar />
                            <Home />
                            <Footer />
                        </>
                    }/>
                    <Route exact path = "/contact" element={
                        <>
                            <Navbar />
                            <Contact />
                            <Footer />
                        </>
                    }/>
                    <Route exact path="/resume" element={
                        <>
                            <Navbar />
                            <Resume />
                            <Footer />
                        </>
                    }/>
                    <Route exact path="/portfolio" element={
                        <>
                            <Navbar />
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
