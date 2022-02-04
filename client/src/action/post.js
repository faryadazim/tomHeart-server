import * as api from '../service/fetchAPI'
// here we import everything from api as object so that we can use it like => api.fetcgAPI


export const getPost =()=>async(dispatch)=>{
    try {
       const {data}=await api.fetcgAPI()
         dispatch({ type: "FETCH_ALL", payload: data });
  
    } catch (error) {
       console.log('error while fetching data'); 
    }
 
}