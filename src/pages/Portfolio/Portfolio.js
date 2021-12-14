import React, {useState, useEffect} from "react";
import "./style.css"
import Projects from "../../components/Projects"
import API from "../../utils/API"

function Portfolio () {
    const [projects, setProjects] = useState([])

    useEffect(()=>{
        API.getProjects()
        .then(res=>{
            setProjects(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
        // eslint-disable-next-line
    },[])

    return (
        <div className="zs-portfolio d-flex flex-row flex-wrap col-12 m-0 justify-content-center overflow-auto">
            {projects.map((item) => {
                return <Projects key={item.id} projects={item}/>
            })}
        </div>
    )    
}

export default Portfolio