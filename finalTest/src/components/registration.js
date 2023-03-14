import React, { useState } from 'react'
import RadioGroup from "@mui/material/RadioGroup";
import Radio from '@mui/joy/Radio';
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { useFormik } from 'formik';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';
import{useNavigate} from 'react-router-dom'
import Checkbox from '@mui/joy/Checkbox';
import ReactDOM from 'react-dom';
const label = { inputProps: { "aria-label": "Checkbox demo" } };
 function Registration() {
  const initialValues = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    age: "",
    email: "",
  };
  const paperStyle = {
    padding: "30px 20px",
    height: "100vh",
    align: "center",
    width: 300,
    margin: "20px auto",
  };
  const onSubmit = (values, props) => {
    console.log(values);
  };
    const navigate=useNavigate();
    const [selectedValue, setSelectedValue] = React.useState('a');
    function navigateHandler() {
      navigate("/password");
    }
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const headerStyle = {
    margin: 0,
  };
  const marginTop = {
    marginTop: 15,
  };
    //const [name, setname] = useState('')
    //const [firstname, setfirstname] = useState('')
    const validationSchema =  yup.object().shape({
      firstname: yup.string()
        .min(5, "Its too short")
        .required("Please enter firstname"),
      lastname: yup.string()
        .min(3, "Its too short")
        .required("Enter your lastname"),
      phonenumber: yup.string()
        //.number().typeError('Enter valid phonenumber')
        .min(10, "Enter valid phone number")
        .max(12, "Enter valid phone number")
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "Phone number must be valid"
        )
        .required("Enter your phonenumber"),
      age: yup.string().required("Enter your age"),
      email: yup.string().email("Enter valid email").required("Enter your email"),
    });
      
      
       
       
    
  return (
    <>
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
        <h2 style={headerStyle}>Register Here.</h2>
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
                fullWidth
                name="firstname"
                label="FirstName"
                type={"text"}
                placeholder="Enter your FirstName"
                helperText={<ErrorMessage name="firstname" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="lastname"
                label="LastName"
                type={"text"}
                placeholder="Enter your LastName"
                helperText={<ErrorMessage name="lastname" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="phonenumber"
                label="PhoneNumber"
                placeholder="Enter your phonenumber"
                helperText={<ErrorMessage name="phonenumber" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="age"
                label="Age"
                placeholder="Enter your age"
                type={"number"}
                helperText={<ErrorMessage name="age" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="email"
                label="Email"
                type={"email"}
                placeholder="Enter your emailId"
                helperText={<ErrorMessage name="email" />}
              />
              <FormControl style={marginTop}>
                <FormLabel id="demo-radio-buttons-group-label">
                   Gender 
                &nbsp;&nbsp; &nbsp;
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  style={{ display: "initial" }}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
                </FormLabel>
              </FormControl>
              <br></br>
              <br></br>
              <label>Skills</label>
              <br></br>
              <br></br>
              <Checkbox {...label} type="checkbox" name="skills" id="skills" />
              <span id="java"> Java</span>
              &nbsp; &nbsp;
              <Checkbox {...label} type="checkbox" name="skills" id="skills" />
              <span id="sql"> SQL</span>
              &nbsp; &nbsp;
              <Checkbox {...label} type="checkbox" name="skills" id="skills" />
              <span id="react"> React</span>
              &nbsp; &nbsp;
              <br></br>
              <br></br>
              <Button
                type="submit"
                disabled={!props.isValid}
                onClick={navigateHandler}
                variant="contained"
                color="primary"
              >
                Register
              </Button>
            </Form>
          )}
        </Formik>
        </Grid>
        </Paper>
    </Grid>
         </>
  );   
         }
     // ReactDOM.render(<WithMaterialUI />, document.getElementById('root'));




export default Registration