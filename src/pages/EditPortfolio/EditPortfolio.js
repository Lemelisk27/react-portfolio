import React, {useEffect, useState} from 'react'
import "./style.css"
import API from "../../utils/API"
import ProjectList from "../../components/ProjectList"
import {Modal} from "react-bootstrap"
import AddProject from "../../components/AddProject"
import DeleteProject from "../../components/DeleteProject"

function EditPortfolio () {
    const [projects, setProjects] = useState([])
    const [showAddModal, setShowAddModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    useEffect(()=>{
        loadPage()
        // eslint-disable-next-line
    },[])

    useEffect(()=>{
        loadPage()
        // eslint-disable-next-line
    },[showAddModal, showDeleteModal])

    const loadPage = () => {
        API.getProjects()
        .then(res=>{
            setProjects(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const addBtn = (e) => {
        e.preventDefault()
        setShowAddModal(true)
    }

    const deleteBtn = (e) => {
        e.preventDefault()
        setShowDeleteModal(true)
    }

    return (
        <div className='zs-editportfolio d-flex flex-column col-12'>
            <div className='d-flex flex-column col-11 mx-auto'>
                <h1 className='text-center mt-5'>Select a Project to Edit</h1>
                <div className='d-flex flex-row flex-wrap col-12 justify-content-center mt-3'>
                    {projects.map(item => <ProjectList key={item.id} project={item}/>)}
                </div>
            </div>
            <div className='d-flex flex-row justify-content-around col-6 mx-auto my-5'>
                <button className='bg-black text-light col-3 rounded' onClick={addBtn}>Add Project</button>
                <button className='bg-black text-light col-3 rounded' onClick={deleteBtn}>Delete Project</button>
            </div>
            <Modal
                size="lg"
                show={showAddModal}
                onHide={() => {setShowAddModal(false)}}
                aria-labelledby="add-modal"
                centered>
                <Modal.Header closeButton className="zs-addprojectmodal">
                    <h3>Add Project</h3>
                </Modal.Header>
                <Modal.Body>
                    <AddProject setShowAddModal={setShowAddModal}/>
                </Modal.Body>
            </Modal>
            <Modal
                size="lg"
                show={showDeleteModal}
                onHide={() => {setShowDeleteModal(false)}}
                aria-labelledby="add-modal"
                centered>
                <Modal.Header closeButton className='zs-addprojectmodal'>
                    <h3>Delete Project</h3>
                </Modal.Header>
                <Modal.Body>
                    <DeleteProject projects={projects} setShowDeleteModal={setShowDeleteModal}/>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default EditPortfolio