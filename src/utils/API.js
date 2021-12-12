import axios from "axios";

// const URL_PREFIX = "http://localhost:3001"

const URL_PREFIX = "https://lemelisk27-back.herokuapp.com"

const API = {
    getUsers:()=>{
        return axios.get(`${URL_PREFIX}/api/users`)
    },
    getProjects:()=>{
        return axios.get(`${URL_PREFIX}/api/projects`)
    }
}

export default API