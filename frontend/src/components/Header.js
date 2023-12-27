import React, { useState } from 'react';
import {AppBar, Button, Toolbar, Typography, Box, Tabs,Tab} from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
 const isLoggedIn = useSelector(state=> state.isLoggedIn);

  const [value, setValue]= useState();
  return (
   <AppBar
   position='sticky'
    sx={{background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'}}>
    <Toolbar>
      <Typography variant='h4'>
        BlogsApp
      </Typography>
     {isLoggedIn && <Box display={'flex'} marginLeft={'auto'} marginRight={'auto'}>
      <Tabs textColor='inherit' value={value} onChange={(e,val)=>setValue(val)}>
        <Tab LinkComponent={Link} to="/blogs" label="All Blogs"/>  
        <Tab LinkComponent={Link} to="/myBlogs"  label="My Blogs"/>
      </Tabs>
      </Box>}
      <Box display={'flex'} marginLeft={'auto'}>
       {!isLoggedIn && <><Button LinkComponent={Link} to="/login"  variant='contained'  sx={{margin:1, borderRadius:2, color: 'pink'}} >Login</Button>
        <Button LinkComponent={Link} to="/login" variant='contained'sx={{margin:1,borderRadius:2,color: 'pink'}} >Signup</Button> </>}
{   isLoggedIn  &&    <Button LinkComponent={Link} to="/login"  variant='contained'sx={{margin:1,borderRadius:2,color: 'pink'}} >Logout</Button>
}
      </Box>
    </Toolbar>
   </AppBar>
  )
}

export default Header
