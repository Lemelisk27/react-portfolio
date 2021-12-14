import axios from "axios";

// const URL_PREFIX = "http://localhost:3001"

const URL_PREFIX = "https://lemelisk27-back.herokuapp.com"

const API = {
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
    }
}

export default API