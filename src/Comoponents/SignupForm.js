import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Link, Grid } from '@mui/material';
import axios from 'axios';
import { SiGnuprivacyguard } from "react-icons/si";

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('https://your-api-endpoint.com/signup', { email, password });
      setMessage('Signup successful!');
      console.log(response.data);
    } catch (error) {
      setMessage('Signup failed. Try again.');
      console.error('Error:', error);
    }
  };

  return (
    <Container maxWidth="xs" className='form-page'>
        <SiGnuprivacyguard className='fs-2'/>
      <Typography variant="h4" component="h1" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          autoComplete="new-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Sign Up
        </Button>
        <Grid container>
          <Grid item>
            <Link top={'/form'} href="/form" variant="body2" className='mt-3'>
              Already have an account? Login
            </Link>
          </Grid>
        </Grid>
        {message && <Typography variant="body2" color="error">{message}</Typography>}
      </form>
    </Container>
  );
};

export default SignupForm;
