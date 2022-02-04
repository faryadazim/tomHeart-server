import axios from 'axios'
const url= 'http://localhost:500/post'
export const fetchApi = ()=>{

return axios.get(url)
}