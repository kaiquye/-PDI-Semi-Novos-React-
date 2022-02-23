import axios from 'axios'

export const Axios = axios.create({
    baseURL : 'http://localhost:8080/'
})
//enviar o token : 
// axios.defaults.headers.post['header1'] = Token 
