import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

const Blog = ({title, description, imageURL, userName}) => {
  return (
    <div>
       <Card sx={{ width: "40%", margin:'auto',marginTop:2, padding:2, boxShadow:"5px 5px 10px #ccc", ":hover":{
        boxShadow:"10px 10px 20px #ccc"
        } }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
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
        <Typography variant="body2" color="text.secondary">
       <b>{userName}</b> {":"} {description}
        </Typography>
      </CardContent>
    
    </Card>
    </div>
  )
}

export default Blog
