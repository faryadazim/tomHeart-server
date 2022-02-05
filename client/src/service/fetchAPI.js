import axios from 'axios'

const url = 'http://localhost:5001/posts';
export const fetchAPI = ()=>{

return axios.get(url)
}
export const createPost = (newData) => {
  return axios.post(url, newData);
};