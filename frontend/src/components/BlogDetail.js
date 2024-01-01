import { Box, Button, InputLabel, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const labelStyles={mb:1, mt:2, fontSize:'24px', fontWeight:'bold', color:'#189ec8'};

const BlogDetail = () => {
  const navigate= useNavigate();
  const [blog, setBlog] = useState();
  const id = useParams().id;
  console.log(id);

  const [inputs, setInputs] = useState({
});
const handleChange = (e)=>{
  setInputs((prevState)=>({
    ...prevState,
    [e.target.name]: e.target.value
}))
};
  const fetchDetails = async()=>{
    const res = await axios.get(`http://localhost:5000/api/blog/${id}`).catch(err=> console.log(err));
    const data = await res.data;
    return data;
  }
  useEffect(()=>{
    fetchDetails().then((data)=>{setBlog(data.blog)
    setInputs ({ title:data.blog.title, description: data.blog.description})
    });
  },[id]);
  const sendRequest = async()=>{
    const res = await axios.put(`http://localhost:5000/api/blog/update/${id}`,{
      title: inputs.title,
      description:inputs.description
    }).catch(err=> console.log(err));

    const data = await res.data;
      return data;
  }
  console.log(blog);
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(data=>console.log(data)).then(()=>navigate("/myBlogs") );
  }
  return (
    <div>
      {inputs &&
        <form onSubmit={handleSubmit}>
        <Box
         border={3}
          borderColor={"#189ec8"} 
          borderRadius={7}
           boxShadow="10px 10px 30px #ccc"
            padding={3} 
            margin={'auto'}
            marginTop={5}
             display={"flex"} 
             flexDirection={"column"}
              width={"80%"}>
          <Typography fontWeight={"bold"} padding={3} color={"#790957"} variant='h3'textAlign={"center"} >Post Your Blog</Typography>
          <InputLabel sx={labelStyles}>Title</InputLabel>
        <TextField name='title' onChange={handleChange} value={inputs.title} sx={{margin:'normal', variant:'outlined'}}/>
        <InputLabel sx={labelStyles}>Description</InputLabel>
        <TextField name='description' onChange={handleChange} value={inputs.description} sx={{margin:'normal', variant:'outlined'}}/>
       <Button type='submit' variant='contained' 
            sx={{borderRadius:2, color:'white',bgcolor:'#790957', width:100, margin:'auto',marginTop:3}}>Submit</Button>
        </Box>
      </form>
}
    </div>
  )
}

export default BlogDetail
