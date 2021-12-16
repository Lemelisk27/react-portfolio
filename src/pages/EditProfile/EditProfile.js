import React, {useEffect, useState} from "react";
import "./style.css"
import API from "../../utils/API";
import {Modal} from "react-bootstrap"
import ProfileModal from "../../components/ProfileModal"
import ChangePassword from "../../components/ChangePassword"

function EditProfile () {
    const [user, setUser] = useState({})
    const [showEditModal, setShowEditModal] = useState(false)
    const [showPassModal, setShowPassModal] = useState(false)

    useEffect(()=>{
        loadPage()
        // eslint-disable-next-line
    },[])

    useEffect(()=>{
        loadPage()
    },[showEditModal])

    const loadPage = () => {
        API.getUsers()
        .then(res=>{
            setUser(res.data[0])
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const editProfile = (e) => {
        e.preventDefault()
        setShowEditModal(true)
    }

    const changePassword = (e) => {
        e.preventDefault()
        setShowPassModal(true)
    }

    return (
        <div className="zs-profile col-12">
            <div className="col-11 mx-auto pt-3">
                <div>
                    <img src={user.img} className="col-1 my-4 rounded" alt="My Pic"/>
                    <h1>{user.first_name} {user.last_name}</h1>
                    <p>Username: {user.username}</p>
                    <p className="mb-0">Address:</p>
                    <p className="mb-0">{user.street}</p>
                    <p className="mb-0">{user.city}, {user.state} {user.zip}</p>
                    <p>Phone: {user.phone}</p>
                    <p className="mb-0">Email: {user.email}</p>
                    <p className="mb-0">GitHub: {user.github}</p>
                    <p className="mb-0">LinkedIn: {user.linkedin}</p>
                    <p>Portfolio: {user.portfolio}</p>
                    <p className="mb-0">About:</p>
                    <p>{user.about}</p>
                </div>
                <div className="d-flex flex-row justify-content-around mt-5">
                    <button className="bg-black text-light col-2 rounded" onClick={editProfile}>Edit Profile</button>
                    <button className="bg-black text-light col-2 rounded" onClick={changePassword}>Change Password</button>
                </div>
            </div>
            <Modal
                size="lg"
                show={showEditModal}
                onHide={() => {setShowEditModal(false)}}
                aria-labelledby="add-modal"
                centered>
                <Modal.Header closeButton className="zs-editprofilemodal">
                    <h3>Edit {user.first_name} {user.last_name}</h3>
                </Modal.Header>
                <Modal.Body>
                    <ProfileModal user={user} setShowEditModal={setShowEditModal}/>
                </Modal.Body>
            </Modal>
            <Modal
                size="lg"
                show={showPassModal}
                onHide={() => {setShowPassModal(false)}}
                aria-labelledby="add-modal"
                centered>
                <Modal.Header closeButton className="zs-editprofilemodal">
                    <h3>Change {user.first_name} {user.last_name}'s Password</h3>
                </Modal.Header>
                <Modal.Body>
                    <ChangePassword user={user} setShowPassModal={setShowPassModal}/>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default EditProfile