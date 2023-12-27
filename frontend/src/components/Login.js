import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
      <form>
        <Box
        maxWidth={400}
         display={'flex'} 
        flexDirection={'column'} 
        alignItems={'center'}
         justifyContent={'center'} 
        boxShadow={'10px 10px 20px #ccc'}
        padding={3}
        margin={'auto'}
        marginTop={5}
        borderRadius={5}
        >
          <Typography variant='h3' padding={3} textAlign={'center'}>
          Login
          </Typography>
          <TextField  placeholder='Name' margin={'normal'}/>
          <TextField type='email' placeholder='Email' margin={'normal'}/>
          <TextField type='password' placeholder='Password' margin={'normal'}/>
          <Button variant='contained' sx={{borderRadius:2, color:'pink', marginTop:3}} >Submit</Button>
          <Button sx={{borderRadius:2, marginTop:3}}>Signup</Button>
        </Box>
      </form>
    </div>
  )
}

export default Login
