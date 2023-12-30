import React, { useState } from 'react';
import {AppBar, Button, Toolbar, Typography, Box, Tabs,Tab} from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';
const Header = () => {
  const dispatch = useDispatch();
 const isLoggedIn = useSelector(state=> state.isLoggedIn);
//radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)
  const [value, setValue]= useState();
  return (
   <AppBar
   position='sticky'
    sx={{background: 'linear-gradient(90deg, rgba(36,0,6,1) 0%, rgba(111,8,83,1) 16%, rgba(121,9,87,1) 50%, rgba(24,158,200,1) 100%)'}}>
    <Toolbar>
      <Typography variant='h4'>
        BlogsApp
      </Typography>
     {isLoggedIn && <Box display={'flex'} marginLeft={'auto'} marginRight={'auto'}>
      <Tabs textColor='inherit' value={value} onChange={(e,val)=>setValue(val)}>
        <Tab LinkComponent={Link} to="/blogs" label="All Blogs"/>  
        <Tab LinkComponent={Link} to="/myBlogs"  label="My Blogs"/>
        <Tab LinkComponent={Link} to="/blogs/add"  label="Add Blog"/>

      </Tabs>
      </Box>}
      <Box display={'flex'} marginLeft={'auto'}>
       {!isLoggedIn && <><Button LinkComponent={Link} to="/login"  variant='contained'  sx={{margin:1, borderRadius:2, color: 'white', bgcolor:'#790957'}} >Login</Button>
          </>} 
{   isLoggedIn  &&    <Button onClick={()=>dispatch(authActions.logout())} LinkComponent={Link} to="/login"  variant='contained'sx={{margin:1,borderRadius:2,color: 'white', bgcolor:'#790957'}} >Logout</Button>
}
      </Box>
    </Toolbar>
   </AppBar>
  )
}

export default Header
