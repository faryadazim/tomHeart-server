import React, { useEffect } from 'react';
import Posts from './Posts/Posts'
import Form from "./Form/Form";
// import {useDispatch} from 'react-redux'
import {getPost} from './action/post.js'

const App = () => {
  // const dispatch = useDispatch()
  // useEffect(() => {
//  dispatch(getPost)
//   }, [dispatch]);
  
  return (
    <div className='m-4'>
     <h6 className='text-center my-2'>Welcome Boss</h6> 
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Posts />
          </div>{" "}
          <div className="col-md-4">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
