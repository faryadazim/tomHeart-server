import React, { useState } from "react";
import FileBase from "react-file-base64";
import {useDispatch} from 'react-redux'
import { createPost } from "../action/post";
const Form = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault() 
  dispatch(createPost(postData)); 
  };
    const clear = () => {
      console.log("clear");
    };
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedfile: "",
  }); 
  return (
    <>
      <div className="container  h-100" onSubmit={handleSubmit}>
        <form action="">
          <div className="row">
            <label htmlFor="" className="px-0 py-1">
              {" "}
              Creator{" "}
            </label>
            <input
              type="text"
              className="form-control form-control-sm w-100"
              placeholder="type here"
              value={postData.creator}
              onChange={(e) =>
                setPostData({ ...postData, creator: e.target.value })
              }
            />
          </div>
          <div className="row">
            <label htmlFor="" className="px-0 py-1">
              Title
            </label>
            <input
              type="text"
              className="form-control form-control-sm w-100"
              placeholder="type here"
              value={postData.title}
              onChange={(e) =>
                setPostData({ ...postData, title: e.target.value })
              }
            />
          </div>
          <div className="row">
            <label htmlFor="" className="px-0 py-1">
              Message
            </label>
            <input
              type="text"
              className="form-control form-control-sm w-100"
              placeholder="type here"
              value={postData.message}
              onChange={(e) =>
                setPostData({ ...postData, message: e.target.value })
              }
            />
          </div>
          <div className="row">
            <label htmlFor="" className="px-0 py-1">
              Tag
            </label>
            <input
              type="text"
              className="form-control form-control-sm w-100"
              placeholder="type here"
              value={postData.tags}
              onChange={(e) =>
                setPostData({ ...postData, tags: e.target.value })
              }
            />
          </div>
          <div className="fileInput my-2 mx-0">
            <FileBase
              type="file"
              multiple={false}
              onDone={(base64) =>
                setPostData({ ...postData, selectedfile: base64 })
              }
            ></FileBase>
          </div>
          <button type="submit" className=" mx-0 px-0 my-1 w-100 btn btn-sm btn-primary">
            Submit
          </button>
          <button
            type="reset"
            className=" mx-0 px-0 my-1 w-100 btn btn-sm btn-danger"
         onClick={clear}
         >Clear</button>
        </form>
      </div>
    </>
  );
};

export default Form;
