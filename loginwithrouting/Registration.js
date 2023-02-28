import React, { useState } from 'react'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import{useNavigate} from 'react-router-dom'
import TextField from '@mui/material/TextField';
function Registration() {
    const navigate=useNavigate();
    //const [name, setname] = useState('')
    const [username, setusername] = useState('')
    // const nameChange=(e)=>{
    //     setname(e.target.value)
    // }
    const usernameChange=(e)=>{
        setusername(e.target.value)
    }
    const loginHandler=()=>{
        navigate('/success',{state:{username:username}})
    }
  return (
    <div style={{textAlign: "center"}}>
        <h1>Registration</h1><br/>
        Name : <TextField required id="outlined-required" label="Required"
          defaultValue="User Name" 
        /><br/>
        <br/>
        Username :<TextField required id="outlined-required" label="Required"
          defaultValue="User Name" onChange={usernameChange}
        /><br/>
        <br/>
        Password: <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        /><br/><br/>
        <Stack direction="row" spacing={5} justifyContent="center">
        <Button type='submit' variant="contained" color="success" onClick={loginHandler}>Login</Button>
         </Stack>
         </div>
  )
}


export default Registration