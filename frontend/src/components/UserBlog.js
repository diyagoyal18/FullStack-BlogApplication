import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Blog from './Blog';
const UserBlog = () => {
  const [blogs, setblogs ]=useState();
  const id = localStorage.getItem("userId");
  const sendRequest = async()=>{
    const res = await axios.get(`http://localhost:5000/api/blog/user/${id}`).catch
    (err=>console.log(err));
    const data = await res.data;
    return data;
  }
  useEffect(()=>{
    sendRequest().then((data)=>setblogs(data.blogs.blogs))
  },[ ]);
  console.log(blogs);
  return (
    <div>
       {blogs && blogs.map((blog,index)=>(
      <Blog title={blog.title} description={blog.description} imageURL={blog.imageURL} userName={blog.user.name}/>
     ))}
    </div>
  )
}

export default UserBlog
