import { Button, Container, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {registerUser} from "../Redux/Auth/action";

const SignupForm = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const formik = useFormik({
    initialValues: {
        fullName : "",
        email: "",
        password: "",
        role : "CUSTOMER"
    },
    onSubmit: (values) => {
        console.log("Submitting", values);
        values.username = values.fullName
        dispatch(registerUser({userData:values, navigate}))
        
    },
});
  return (
    <Container component="main" maxWidth="xs">
  <div className='space-y-5'>
    <Typography className="text-center" variant="h5">
      Signup
    </Typography>
    <form className = "space-y-5" onSubmit={formik.handleSubmit}>

        <TextField
        variant="outlined"
        fullWidth
        name="fullName"
        id="fullName"
        label="Full Name"
        onChange={formik.handleChange}
        value={formik.values.fullName}
        required
      />

      <TextField
        variant="outlined"
        fullWidth
        name="email"
        id="email"
        label="Email Address"
        onChange={formik.handleChange}
        value={formik.values.email}
        required
      />

      <TextField
        variant="outlined"
        fullWidth
        name="password"
        id="password"
        label="Password "
        required
        type = "password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      <Button sx={{py : ".8rem"}}fullWidth variant="contained" type="submit"> Signup </Button>

    </form>
  </div>
</Container>
  )
}

export default SignupForm;