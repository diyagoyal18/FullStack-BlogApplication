import { Box, InputLabel, TextField, Typography } from '@mui/material'
import React from 'react'


const labelStyles={mb:1, mt:2, fontSize:'24px', fontWeight:'bold', color:'#1976d2'};
const AddBlog = () => {
  
  return (
    <div>
      <form>
        <Box
         border={3}
          borderColor={"lavender"} 
          borderRadius={7}
           boxShadow="10px 10px 30px #ccc"
            padding={3} 
            margin={'auto'}
            marginTop={5}
             display={"flex"} 
             flexDirection={"column"}
              width={"80%"}>
          <Typography fontWeight={"bold"} padding={3} color={"pink"} variant='h3'textAlign={"center"} >Post Your Blog</Typography>
          <InputLabel sx={labelStyles}>Title</InputLabel>
        <TextField sx={{margin:'normal', variant:'outlined'}}/>
        <InputLabel sx={labelStyles}>Description</InputLabel>
        <TextField sx={{margin:'normal', variant:'outlined'}}/>
        <InputLabel sx={labelStyles}>imageURL</InputLabel>
        <TextField sx={{margin:'normal', variant:'outlined'}}/>
        </Box>
      </form>
    </div>
  )
}

export default AddBlog
