import * as api from '../service/fetchAPI' 

export const getPost =()=>async(dispatch)=>{
    try {
       const {data}=await api.fetcgAPI()
         dispatch({ type: "FETCH_ALL", payload: data });
  
    } catch (error) {
       console.log('error while fetching data clint side' , error); 
    }
 
}
export const createPost = (post)=> async(dispatch)=>{
   try {
     
      const {data} = await api.createPost(post)
  console.log(data , 'darta in action');
      dispatch({type: 'CREATE', payload: data });
      
   } catch (error) {
      console.log('error in action' , error.message);
   }
}