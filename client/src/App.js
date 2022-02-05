import React , { useEffect} from 'react';
import Form from './Form/Form';
import Posts from './Posts/Posts';
import './App.css'
import { useDispatch } from 'react-redux';
import { getPost } from './actions/post.js';




const App = () => {
const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);
  
  return (
    <>
      <h5 className='text-center my-3 mt-4'>Welcome to tomHeart</h5>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
          <Posts/>
          </div>
          <div className="col-md-4"><Form/></div>
        </div>
      </div>
    </>
  );
};

export default App;
