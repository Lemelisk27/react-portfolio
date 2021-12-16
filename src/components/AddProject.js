import React, {useState} from "react";
import Auth from "../utils/Auth"
import API from "../utils/API";

function AddProject (props) {
    const token = Auth.getToken()
    const [titleError, setTitleError] = useState(false)
    const [siteError, setSiteError] = useState(false)
    const [githubError, setGithubError] = useState(false)
    const [project, setProject] = useState({
        UserId: 1,
        github: "",
        site: "",
        title: ""
    })

    const cancelBtn = (e) => {
        e.preventDefault()
        props.setShowAddModal(false)
    }

    const handleInputChange = (e) => {
        if (e.target.name === "title") {
            setProject({
                ...project,
                title: e.target.value
            })
        }
        if (e.target.name === "site") {
            setProject({
                ...project,
                site: e.target.value
            })
        }
        if (e.target.name === "github") {
            setProject({
                ...project,
                github: e.target.value
            })
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        resetErrors()
        if (project.title === "" || project.title === null) {
            setTitleError(true)
            return
        }
        if (project.site === "" || project.site === null) {
            setSiteError(true)
            return
        }
        if (project.github === "" || project.github === null) {
            setGithubError(true)
            return
        }
        API.newProject(project,token)
        .then(res=>{
            console.log(res)
            props.setShowAddModal(false)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const resetErrors = () => {
        setTitleError(false)
        setSiteError(false)
        setGithubError(false)
    }

    return (
        <div className="d-flex flex-column col-12">
            <div className="d-flex flex-column col-6 mx-auto px-1 py-2">
                <label>Title</label>
                <input type="text" name="title" value={project.title} onChange={handleInputChange}></input>
                {titleError && (
                    <p className="text-danger mb-0">A Title is Required</p>
                )}
            </div>
            <div className="d-flex flex-column col-12 mx-auto px-1 py-2">
                <label>Website</label>
                <input type="text" name="site" value={project.site} onChange={handleInputChange}></input>
                {siteError && (
                    <p className="text-danger mb-0">A Website is Required</p>
                )}
            </div>
            <div className="d-flex flex-column col-12 mx-auto px-1 py-2">
                <label>GitHub</label>
                <input type="text" name="github" value={project.github} onChange={handleInputChange}></input>
                {githubError && (
                    <p className="text-danger mb-0">GitHub is Required</p>
                )}
            </div>
            <div className="d-flex flex-row justify-content-around mt-3">
                <button className="bg-black text-light col-3 rounded" onClick={handleFormSubmit}>Submit</button>
                <button className="bg-black text-light col-3 rounded" onClick={cancelBtn}>Cancel</button>
            </div>
        </div>
    )
}

export default AddProject