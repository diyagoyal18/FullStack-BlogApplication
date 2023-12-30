import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'


const labelStyles={mb:1, mt:2, fontSize:'24px', fontWeight:'bold', color:'#189ec8'};
const AddBlog = () => {
  const [inputs, setInputs] = useState({
    title:"", description:"", imageURL:""
});
const handleChange = (e)=>{
  setInputs((prevState)=>({
    ...prevState,
    [e.target.name]: e.target.value
}))
};
const sendRequest = async()=>{
  const res = await axios.post("http://localhost:5000/api/blog/add",{
    title:inputs.title,
    description:inputs.description,
    image:inputs.imageURL,
    user: localStorage.getItem("userId")
  }).catch(err=>console.log(err));
  const data = await res.data;
  return data;
}
const handleSubmit = (e)=>{
  e.preventDefault();
  console.log(inputs);
  sendRequest().then(data=>console.log(data));
}
  return (
    <div>
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
        <InputLabel sx={labelStyles}>imageURL</InputLabel>
        <TextField name='imageURL' onChange={handleChange} value={inputs.imageURL} sx={{margin:'normal', variant:'outlined'}}/>
       <Button type='submit' variant='contained' 
            sx={{borderRadius:2, color:'white',bgcolor:'#790957', width:100, margin:'auto',marginTop:3}}>Submit</Button>
        </Box>
      </form>
    </div>
  )
}

export default AddBlog
