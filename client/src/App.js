import React, { useEffect } from "react";
import Posts from './Posts/Posts.js'
import Form from './Form/Form.js'
import {useDispatch} from 'react-redux'
import { getPost } from "./action/post.js";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(new Date());
  dispatch(getPost());
  }, [dispatch]);
  
  return <>
  <h3 className='text-center my-4' >tomHeart </h3>
  <div className="container">
    <div className="row">
      <div className="col-md-8"><Posts/></div>
      <div className="col-md-4"><Form/></div>
    </div>
  </div>
  
  </>;
};

export default App;
