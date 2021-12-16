import React, {useEffect, useState} from "react";
import "./style.css"
import {useParams} from "react-router-dom"
import API from "../../utils/API";
import Auth from "../../utils/Auth"
import {Modal} from "react-bootstrap"
import EditProject from "../../components/EditProject"

function ProjectDetails () {
    const token = Auth.getToken()
    const {id} = useParams()
    const [project, setProject] = useState({})
    const [showEditProjectModal, setShowEditProjectModal] = useState(false)

    useEffect(()=>{
        loadPage()
        // eslint-disable-next-line
    },[])

    useEffect(()=>{
        loadPage()
        // eslint-disable-next-line
    },[showEditProjectModal])

    const loadPage = () => {
        API.findProject(id,token)
        .then(res=>{
            console.log(res.data)
            setProject(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const editBtn = (e) => {
        e.preventDefault()
        setShowEditProjectModal(true)
    }

    return (
        <div className='zs-editportfolio col-12'>
            <div className="d-flex flex-column col-11 mx-auto">
                <h1 className="text-center">{project.title}</h1>
                <img src={project.img} alt={project.title} className="col-6 mx-auto"/>
                <div className="col-6 mx-auto mt-3">
                    <p className="text-center mb-0">{project.title}: <a href={project.site}>{project.site}</a></p>
                    <p className="text-center mb-0">GitHub: <a href={project.github}>{project.github}</a></p>
                </div>
                <div className="d-flex flex-row col-6 mx-auto mt-5 justify-content-around">
                    <button className="bg-black text-light col-3 rounded" onClick={editBtn}>Edit Project</button>
                </div>
            </div>
            <Modal
                size='lg'
                show={showEditProjectModal}
                onHide={() => {setShowEditProjectModal(false)}}
                aria-labelledby="add-modal"
                centered>
                <Modal.Header closeButton className="zs-editportfoliomodal">
                    <h3>Edit {project.title}</h3>
                </Modal.Header>
                <Modal.Body>
                    <EditProject setShowEditProjectModal={setShowEditProjectModal} project={project}/>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ProjectDetails