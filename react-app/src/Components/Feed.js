import {useState, useEffect} from 'react'
import axios from 'axios'
import React from 'react';
import Post from "./Post";
import NewPost from "./NewPost";

const Feed = () => {

  const [postData, setPostsData] = useState();

  const getPostsData = () => {
    axios
      .get('http://localhost:3002/posts')
      .then((data) => setPostsData(data.data))
      .catch((error) => console.log(error)); 
  };

  useEffect(() => {
    getPostsData();
  }, [postData])

  return (
    <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
      {
        postData && postData.map(d =>
          <Post title={d.title} body={d.body} comments={d.comments} id={d.id} key={d.id} />
        )
      }

      <NewPost />
    </div>
  )

}


export default Feed;
