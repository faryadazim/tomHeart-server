import * as api from '../service/fetchAPI.js'
export const getPost = ()=>async (dispatch)=>{
    try {
           const {data}= await api.fetchAPI();
dispatch ({
    type:'FETCH_ALL' , 
    payload:data
}) 
    } catch (error) {
     console.log('error while getFetchApi Data ');   
    }

}


export const createPost = (post) => async (dispatch) => {
    try {
          const { data } = await api.createPost(post);
  dispatch({
    type: "CREATE",
     payload:{data}
  });
    } catch (error) {
     console.log("error while creating API data");   
    }

};