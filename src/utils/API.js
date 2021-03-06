import axios from "axios";

// const URL_PREFIX = "http://localhost:3001"

const URL_PREFIX = "https://lemelisk27-back.herokuapp.com"

const API = {
    Login:(data)=>{
        return axios.post(`${URL_PREFIX}/api/users/login`, data)
    },
    getUsers:()=>{
        return axios.get(`${URL_PREFIX}/api/users`)
    },
    getProjects:()=>{
        return axios.get(`${URL_PREFIX}/api/projects`)
    },
    getUserResume:(id)=>{
        return axios.get(`${URL_PREFIX}/api/resumes/userresume/${id}`)
    },
    getSkills:(id)=>{
        return axios.get(`${URL_PREFIX}/api/resumes/skills/${id}`)
    },
    getExperience:(id)=>{
        return axios.get(`${URL_PREFIX}/api/resumes/experience/${id}`)
    },
    getRoles:(id)=>{
        return axios.get(`${URL_PREFIX}/api/resumes/roles/${id}`)
    },
    getEducation:(id)=>{
        return axios.get(`${URL_PREFIX}/api/resumes/education/${id}`)
    },
    getDegree:(id)=>{
        return axios.get(`${URL_PREFIX}/api/resumes/degree/${id}`)
    },
    editUser:(data,tkn)=>{
        return axios.put(`${URL_PREFIX}/api/users`, data, {headers:{
            "Authorization": `Bearer: ${tkn}`
        }})
    },
    changePassword:(data,tkn)=>{
        return axios.post(`${URL_PREFIX}/api/users/password`, data, {headers:{
            "Authorization": `Bearer ${tkn}`
        }})
    },
    findProject:(id,tkn)=>{
        return axios.get(`${URL_PREFIX}/api/projects/${id}`, {headers:{
            "Authorization": `Bearer ${tkn}`
        }})
    },
    editProject:(data,tkn)=>{
        return axios.put(`${URL_PREFIX}/api/projects`, data, {headers:{
            "Authorization": `Bearer ${tkn}`
        }})
    },
    newProject:(data,tkn)=>{
        return axios.post(`${URL_PREFIX}/api/projects`, data, {headers:{
            "Authorization": `Bearer ${tkn}`
        }})
    },
    deleteProject:(id,tkn)=>{
        return axios.delete(`${URL_PREFIX}/api/projects/${id}`, {headers:{
            "Authorization": `Bearer ${tkn}`
        }})
    }
}

export default API