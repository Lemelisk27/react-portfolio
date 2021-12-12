import React, { useState } from "react";

function Projects (props) {
    const [currentState, setCurrentState] = useState(false)
    const toggleHover = () => {
        setCurrentState(!currentState)
    }
    if (currentState) {
        return (
            <>
            <div className="d-flex flex-column col-lg-4 col-11 bg-secondary px-auto my-2 mx-2 justify-content-center align-items-center" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                <a href={props.projects.url} className="text-decoration-none" target="_blank" rel='noreferrer noopener'>
                    <h2 className="d-flex col-12 zs-hover">{props.projects.name}</h2>
                </a>
                <a href={props.projects.github} target="_blank" rel='noreferrer noopener'>
                    <img src="images/GitHub-Mark-64px.png" alt="Github" className="mt-5 d-flex col-12 zs-hover"></img>
                </a>
            </div>
            </>
        )
    }
    else {
        return (
            <>
            <div className="d-flex col-lg-4 col-11 my-2 mx-2" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                <img src={props.projects.img} alt={props.projects.name} className="d-flex flex-column col-12"></img>
            </div>
            </>
        )
    }
}

export default Projects