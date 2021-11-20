import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

const projects = [
    {
        id: 1,
        name: "Workout Tracker",
        url: "https://enigmatic-citadel-42972.herokuapp.com/",
        github: "https://github.com/Lemelisk27/workout-tracker",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1636830881/portfolio/hdsaqoalwus6brv3zy0g.png"
    },
    {
        id: 2,
        name: "Coder Mingle",
        url: "https://coder-mingle.herokuapp.com/",
        github: "https://github.com/Project2-Team-5/Coder-Mingle",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1636441775/portfolio/szo9opaqb7uewwejdn1y.png"
    },
    {
        id: 3,
        name: "Tech Blog",
        url: "https://vast-fjord-09411.herokuapp.com/",
        github: "https://github.com/Lemelisk27/tech-blog",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1636442009/portfolio/qrjbjuxsur4j2drxavt2.png"
    },
    {
        id: 4,
        name: "Regional Holiday Calendar",
        url: "https://lemelisk27.github.io/country-holiday/",
        github: "https://github.com/Lemelisk27/country-holiday",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1636339745/portfolio/avc75k72nwow2qkq54zo.png"
    }
]

function PortfolioContainer () {
    const [currentPage, setCurrentPage] = useState('Home')
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />
        }
        if (currentPage === 'Portfolio') {
            return (
                <div className="zs-portfolio d-flex flex-row flex-wrap col-lg-11 col-sm-12 mt-4 mx-auto justify-content-center">
                    {projects.map((item) => {
                        return <Portfolio key={item.id} projects={item}/>
                    })}
                </div>
            )
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
        else {
            return <Resume />
        }
    }
    const handlePageChange = (page) => setCurrentPage(page)
    return (
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    )
}

export default PortfolioContainer