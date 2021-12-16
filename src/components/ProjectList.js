import React, {useState} from "react"
import {Link} from "react-router-dom"

function ProjectList (props) {
    const [project] = useState(props.project)

    return (
        <div className="d-flex flex-column col-3 mx-1">
            <h4 className="text-center">{project.title}</h4>
            <Link to={`/editportfolio/${project.id}`} className="d-flex flex-column col-12 mx-1">
                <img src={project.img} alt={project.title}/>
            </Link>
        </div>
    )
}

export default ProjectList