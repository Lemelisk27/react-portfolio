import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio";

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
    }
]

function PortfolioContainer () {
    const [currentPage, setCurrentPage] = useState('Home')
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio projects={projects}/>
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