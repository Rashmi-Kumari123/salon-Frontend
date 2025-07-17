import { Button, Container, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react'
// import { useDispatch } from 'react-redux';
// import { loginUser } from '../Redux/Auth/action';
// import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
        email: "",
        password: "",
    },
    onSubmit: (values) => {
        console.log("Submitting", values);
        // dispatch(loginUser({ email: values.email, password: values.password, navigate: navigate }))
    },
});
  return (
    <Container component="main" maxWidth="xs">
  <div className='space-y-5'>
    <Typography className="text-center" variant="h5">
      Login
    </Typography>
    <form className = "space-y-5" onSubmit={formik.handleSubmit}>
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

export default LoginForm;