import axios from 'axios'

export const axiosWithAuth = ()=>{
    const token = localStorage.getItem('token')

    return axios.create({
        baseURL: 'https://ft-anywhere-fitness-3.herokuapp.com',
        headers:{
            authorization:token
        }
        
    })
}