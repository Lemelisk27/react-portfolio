import React, {useState, useEffect} from "react";
import OptionList from "./OptionList"
import Auth from "../utils/Auth"
import API from "../utils/API";

function DeleteProject (props) {
    const token = Auth.getToken()
    const [firstLoad, setFirstLoad] = useState(true)
    const [projects] = useState(props.projects)
    const [selectProject, setSelectProject] = useState("")
    const [projectId, setProjectId] = useState(0)

    useEffect(()=>{
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].title === selectProject) {
                setProjectId(projects[i].id)
            }
        }
        // eslint-disable-next-line
    },[selectProject])

    const handleInputChange = (e) => {
        if (e.target.name === "selectProject") {
            setSelectProject(e.target.value)
            setFirstLoad(false)
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        API.deleteProject(projectId,token)
        .then(res=>{
            console.log(res)
            props.setShowDeleteModal(false)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const cancelBtn = (e) => {
        e.preventDefault()
        props.setShowDeleteModal(false)
    }

    return (
        <div className="d-flex flex-column col-12">
            {firstLoad ? (
                <div className="d-flex flex-column col-11 mx-auto px-1 py-2">
                    <label>Select a Project to Delete</label>
                    <select name="selectProject" style={{height: "31px"}} value={selectProject} onChange={handleInputChange}>
                        <option defaultValue="Select a Project">Select a Project</option>
                        {projects.map(item => <OptionList key={item.id} options={item.title}/>)}
                    </select>
                </div>
            ):(
                <div className="d-flex flex-column col-12">
                    <h2 className="text-center">Are you Sure?</h2>
                    <h4 className="text-center">This Will <strong className="text-danger">Permanently</strong> Delete {selectProject}</h4>
                </div>
            )}
            <div className="d-flex flex-row col-12 mt-3 justify-content-around">
                {!firstLoad && (
                    <button className="bg-danger text-light col-3 rounded" onClick={handleFormSubmit}>Yes</button>
                )}
                <button className="bg-black text-light col-3 rounded" onClick={cancelBtn}>Cancel</button>
            </div>
        </div>
    )
}

export default DeleteProject