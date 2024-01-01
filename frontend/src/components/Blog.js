import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
const Blog = ({title, description, imageURL, userName, isUser, _id}) => {
  console.log(title, isUser);

  const navigate = useNavigate();
  const handleEdit = ()=>{

    navigate(`/myBlogs/${_id}`)
  }
  const deleteRequest = async()=>{
    const res = axios.delete(`http://localhost:5000/api/blog/${_id}`).catch(err=> console.log(err))
    const data =await res.data;
    return data;
  }
  const handleDelete= ()=>{
    deleteRequest().then(()=>navigate("/")).then(()=>navigate("/blogs"));
  }
  return (
    <div>
       <Card sx={{ width: "40%", margin:'auto',marginTop:2, padding:2, boxShadow:"5px 5px 10px #ccc", ":hover":{
        boxShadow:"10px 10px 20px #ccc"
        } }}>

          {isUser && (
            <Box display={'flex'}>
                <IconButton onClick={handleEdit} sx={{marginLeft:'auto', color:'#790957'}}  ><EditIcon/></IconButton>
                <IconButton onClick={handleDelete} sx={{color:'#790957'}}><DeleteIcon/></IconButton>

            </Box>
          )}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'rgba(121,9,87,1)' }} aria-label="recipe">
            {userName.charAt(0)}
          </Avatar>
        }
       
        title={title}
      />
      <CardMedia
        component="img"
        height="194"
        image={imageURL}
        alt="Paella dish"
      />
      
      <CardContent>
      <hr></hr>
      <br></br>
        <Typography variant="body2" color="text.secondary">
       <b>{userName}</b> {":"} {description}
        </Typography>
      </CardContent>
    
    </Card>
    </div>
  )
}

export default Blog
