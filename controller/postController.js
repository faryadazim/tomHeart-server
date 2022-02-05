import postMessage from "../model/postMessage.js";


//  READING DATA 
export const getPost =async (req,res)=>{
try {
 const post =  await postMessage.find()
    res.status(200).json(post);
} catch (error) {
    console.log(error);
    res.status(404).json({message:error.message})
}
}


//  CREATING DATA 
export const createPost = async(req, res) => {
 const {
   title,
   message,
   creater ,
   tags,
 } = req.body;
   const post = new postMessage({
          title,
          message,
          creater,
          tags,
          selectedFile:req.body.selectedFile.base64,
        }); 
    try {
      
        await post.save()
        res.status(201).json(post);
    } catch (error) {
       console.log('Error in createing Body ');
    }
};