import { Button, Container, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react'

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
        fullName : "",
        email: "",
        password: "",
        role : "CUSTOMER"
    },
    onSubmit: (values) => {
        console.log("Submitting", values);
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
        value={formik.values.email}
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
        onChange={formik.handleChange}
        value={formik.values.password}
        required
      />

      <Button fullWidth variant="contained" type="submit">Login</Button>

    </form>
  </div>
</Container>
  )
}

export default SignupForm;