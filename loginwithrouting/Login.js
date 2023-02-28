import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Login() {
    const [name, setname] = useState('')
    const navigate=useNavigate();
    const loginHandler=()=>{      
        navigate('/success',{state:{username:name}})
    }
   const handleInput=e=>{
        setname(e.target.value);
    }
    
  return (
    <div style={{textAlign: "center"}}>
        <h1>Login</h1><br/>
        UserName:  <TextField required id="outlined-required" label="Required"
          defaultValue="User Name" onChange={handleInput}
        /><br/>
        <br/>
        Password:  <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        /><br/><br/><br/>
        <Stack direction="row" spacing={5} justifyContent="center">
        <Button type='submit' variant="contained" color="success" onClick={loginHandler}>Login</Button>
         </Stack>
        <br/>
        <br/>
        <Link to='/registration'>Registration</Link>
    </div>
  )
}

export default Login