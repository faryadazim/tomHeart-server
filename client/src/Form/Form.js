import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../actions/post.js";

const Form = () => {
const dispatch = useDispatch();
const [postData, setPostData] = useState({
  title:'',
  message:'',
  creater : '',
  tags : '',
  selectedFile:''
});
  const SubmitHandle = (e) => {
    e.preventDefault(); 
  dispatch(createPost(postData));
    
  };



  return (
    <>
      {/* Title  */}
      <h5 className="text-center text-secondary mb-3 mt-2">Add Memory</h5>
      <form onSubmit={SubmitHandle}>
        {" "}
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control form-control-sm"
          id="title"
          placeholder="i-e : New Year Eve"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        {/* Message  */}
        <div className="mt-2">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="message"
            placeholder="i-e : Islamabad ,  at 2nd Home"
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
        </div>
        {/* creater  */}
        <div className="mt-2">
          <label htmlFor="creater" className="form-label">
            Creater
          </label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="creater"
            placeholder="i-e : Faryad, Steve Wolfes "
            value={postData.creater}
            onChange={(e) =>
              setPostData({ ...postData, creater: e.target.value })
            }
          />
        </div>
        {/* Tags  */}
        <div className="mt-2">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="tags"
            placeholder="i-e : evening , newYear , celebration"
            value={postData.tags}
            onChange={(e) =>
              setPostData({ ...postData, tags: e.target.value.split(',') }) 
            }
          />
        </div>
        {/* File  */}
        <div className="mt-1">
          <label htmlFor="formFileSm" className="form-label">
            Select Image
          </label>
          <div>
          <FileBase
            className="form-control form-control-sm"
            id="formFileSm"
            type="file"
            multiple={false}
            onDone={(base64)=>setPostData({...postData , selectedFile:base64})}
          ></FileBase></div>
        </div>
        <button type="submit" className=" btn btn-sm btn-secondary mt-3 w-100">
          Add Post
        </button>
      </form>
    </>
  );
};

export default Form;
