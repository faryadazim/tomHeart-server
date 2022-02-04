import React from 'react';
import Posts from './Posts/Posts.js'
import Form from './Form/Form.js'
const App = () => {
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
