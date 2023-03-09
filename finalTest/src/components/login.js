import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as yup from 'yup';
import ReactDOM from 'react-dom';
import validation from "./validation";

function Login() {
    const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    password: "",
  });

  const [errors, setError] = useState({});

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    //e.preventDefault();
    let validationResponse = validation(values);
    setError(validationResponse);
    if (Object.keys(validationResponse).length === 0) {
      navigate("/success");
    }
  }
      
  return (
    <div style={{textAlign: "center"}}>
        <h1>Login</h1><br/>
        <TextField id="outlined-basic" name="name" label="UserName" variant="outlined" type="text" value={values.name} onChange={handleChange} />

          {errors.name && (
            <p style={{ color: "red", fontSize: "13px" }}>{errors.name}</p>
          )}
          <div class="error"></div>
          <br/>
        <br/>
          <TextField id="outlined-basic" name="password" label="Password" variant="outlined" type="password" value={values.password} onChange={handleChange} />

        {errors.password && (
        <p style={{ color: "red", fontSize: "13px" }}>
            {errors.password}
        </p>
        )}
        <div class="error"></div>   
        <br/>
        <br/>
        <Button variant="contained"
          type="submit"
          className="login-button"
          onClick={() => handleSubmit()}>
          Login
        </Button>
        <br/>
        <br/>
        <Link to='/registration'>Registration</Link>
    </div>
  )
}


export default Login