import axios from 'axios'

const axiosWithAuth = ()=>{
    const token = localStorage.getItem('token')

    return axios.create({
        baseURL: 'https://ft-anywhere-fitness-3.herokuapp.com/api',
        headers:{
            authorization:token
        }
        
    })
}

export default axiosWithAuth;