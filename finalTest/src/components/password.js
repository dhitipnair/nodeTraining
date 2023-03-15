import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'
import {Grid, Paper,  Typography } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";

import * as yup from 'yup';

  
function Password() {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const initialValues = {
    username: "",
    password: "",
    confirmpassword: "",
  };
  const onSubmit = (values, props) => {
    console.log(values);
  };
  const [success, setSuccess] =useState('');
  
  const validationSchema = yup.object().shape({
    username: yup.string().required("Please enter username"),
    password: yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase and One Number"
      )
      .min(8, "Password should contain atleast 8 characters")
      .required("Enter your password"),
    confirmpassword: yup.string()
      .oneOf([yup.ref("password"), null], "password must match")
      .required("Confirm password is required"),
  });
  const btnStyle = { margin: "8px 0" };
  const navigate=useNavigate();

  function navigateHandler() {
    console.log("Submited");
    setSuccess("Submitted successfully");
    navigate('/success')
  }
  return (
    <div style={{textAlign: "center"}}>
        <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2>Set Password</h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          validateOnMount
        >
          {(props) => (
            <Form>
              {console.log(props)}
              <Field
                as={TextField}
                type="text"
                name="username"
                label="Username"
                placeholder="Username"
                helperText={<ErrorMessage name="username" />}
              />
              <br></br>
              <br></br>
              <Field
                as={TextField}
                type="password"
                name="password"
                label="Password"
                placeholder="Password"
                helperText={<ErrorMessage name="password" />}
              />
              <br></br>
              <br></br>
              <Field
                as={TextField}
                type="password"
                name="confirmpassword"
                label="Confirm Password"
                placeholder="Confirm Password"
                helperText={<ErrorMessage name="confirmpassword" />}
              />
              <br></br>
              <br></br>
        <Stack direction="row" spacing={5} justifyContent="center">
        <Button type='submit'  style={btnStyle}  disabled={!props.isValid} variant="contained" color="success" onClick={navigateHandler}>Login</Button>
         </Stack>
         </Form>
          )}
         </Formik>
      </Paper>
    </Grid>
    </div>
  )
}

export default Password