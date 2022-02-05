import React from 'react';
import { useSelector } from 'react-redux';

const Post = () => {
  const state = useSelector((state) => state.postReducer);
  console.log( 'Data Rendering',state );
  return <>
  <p>
  Post ...</p>
  
  </>;
};

export default Post;
