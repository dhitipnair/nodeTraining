import React from 'react'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import {  Grid, Paper,Typography } from "@material-ui/core";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };

  const initialValues = {
    username: "",
    password: "",
  };
  const onSubmit = (values, props) => {
    console.log(values);
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Please enter username"),
    password: Yup.string()
      .required("Enter your password")
      .required("Enter your password"),
  });

  const btnStyle = { margin: "8px 0" };
  const navigate = useNavigate();
  function navigateHandler() {
    navigate("/success");
  }
      
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2>Sign In</h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          validateOnMount
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                type="text"
                name="username"
                label="Username"
                placeholder="Username"
                fullWidth
                helperText={<ErrorMessage name="username" />}
              />
              <br></br><br></br>
              <Field
                as={TextField}
                type="password"
                name="password"
                label="Password"
                placeholder="Password"
                fullWidth
                helperText={<ErrorMessage name="password" />}
              />
              <br></br>
              <br></br>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={btnStyle}
                fullWidth
                disabled={!props.isValid}
                onClick={navigateHandler}
              >
                LogIn
              </Button>
            </Form>
          )}
        </Formik>
        <Typography>
          Do you have an account?
          <Link to="/registration">Register</Link>
        </Typography>
      </Paper>
    </Grid>
  )
}


export default Login