import React from 'react';
import { useSelector } from 'react-redux';

const Post = () => {
  const state = useSelector((state)=>state.reducer)
  console.log(state);
  return (
    <div>
      Post...
    </div>
  );
};

export default Post;
