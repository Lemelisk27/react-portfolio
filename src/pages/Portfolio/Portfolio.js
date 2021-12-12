import React from "react";
import Projects from "../../components/Projects"

const projects = [
    {
        id: 1,
        name: "Vet's Best Friend",
        url: "https://vetbestfriend.herokuapp.com/",
        github: "https://github.com/Lemelisk27/vbf-front",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1639035452/portfolio/landing_vvitmf.png"
    },
    {
        id: 2,
        name: "Tech Blog",
        url: "https://vast-fjord-09411.herokuapp.com/",
        github: "https://github.com/Lemelisk27/tech-blog",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1636442009/portfolio/qrjbjuxsur4j2drxavt2.png"
    },
    {
        id: 3,
        name: "Regional Holiday Calendar",
        url: "https://lemelisk27.github.io/country-holiday/",
        github: "https://github.com/Lemelisk27/country-holiday",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1636339745/portfolio/avc75k72nwow2qkq54zo.png"
    },
    {
        id: 4,
        name: "Weather Dashboard",
        url: "https://lemelisk27.github.io/weather-dashboard/",
        github: "https://github.com/Lemelisk27/weather-dashboard",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1636339743/portfolio/hpr61takcpt72dcsjsop.png"
    },
    {
        id: 5,
        name: "Regex Tutorial - Gist",
        url: "https://gist.github.com/Lemelisk27/05f69dc4b57288ca3313ea1c3749a31e",
        github: "https://gist.github.com/Lemelisk27/05f69dc4b57288ca3313ea1c3749a31e",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1637546026/portfolio/regex_rdoq5r.png"
    },
    {
        id: 6,
        name: "Note Taker",
        url: "https://whispering-everglades-03607.herokuapp.com/",
        github: "https://github.com/Lemelisk27/note-taker",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1637546370/portfolio/notes_rkdopt.png"
    }
]

function Portfolio () {
    return (
        <div className="zs-portfolio d-flex flex-row flex-wrap col-lg-11 col-sm-12 mt-4 mx-auto justify-content-center">
        {projects.map((item) => {
            return <Projects key={item.id} projects={item}/>
        })}
        </div>
    )    
}

export default Portfolio