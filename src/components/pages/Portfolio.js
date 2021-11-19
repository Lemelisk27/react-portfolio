import React, { useState } from "react";

function Portfolio (props) {
    const [currentState, setCurrentState] = useState(false)
    const toggleHover = () => {
        setCurrentState(!currentState)
    }
    return (
        <div className="zs-portfolio d-flex flex-row flex-wrap col-11 mt-4 mx-auto justify-content-center">
            {props.projects.map((item) => {
                if (currentState) {
                    return (
                        <>
                            <div key={item.id} class="col-4 bg-light mt-2 mx-2" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                                <a href={item.url} class="text-decoration-none">
                                    <h2 className="d-flex col-7 zs-hover">{item.name}</h2>
                                </a>
                                <a href={item.github}>
                                    <img src="images/GitHub-Mark-64px.png" alt="Github" className="mt-5 d-flex col-2 zs-hover"></img>
                                </a>
                            </div>
                        </>
                    )
                }
                else {
                    return (
                        <>
                            <div key={item.id} className="d-flex col-4 mt-2 mx-2" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                                <img src={item.img} alt={item.name} class="d-flex flex-column col-12"></img>
                            </div>
                        </>
                    )
                }
            })}
        </div>
    )
}

export default Portfolio