import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Link,
  Grid,
} from "@mui/material";
import axios from "axios";
import { FaCircleUser } from "react-icons/fa6";

const FormL = ({ isSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSignup && password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    const url = isSignup
      ? "https://your-api-endpoint.com/signup"
      : "https://your-api-endpoint.com/login";

    try {
      const response = await axios.post(url, { email, password });
      setMessage(isSignup ? "Signup successful!" : "Login successful!");
      console.log(response.data);
    } catch (error) {
      setMessage(
        isSignup ? "Signup failed. Try again." : "Login failed. Try again."
      );
      console.error("Error:", error);
    }
  };

  return (
    <div className="form-bg-color">
      <Container maxWidth="xs" className="form-page">
        <FaCircleUser className="fs-2" />
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {isSignup ? "Sign Up" : "Login"}
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
          {isSignup && (
            <TextField
              className="my-3"
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
          )}
          <Button type="submit" fullWidth variant="contained" color="primary">
            {isSignup ? "Sign Up" : "Login"}
          </Button>
          <Grid container>
            <Grid item>
              <Link
                top={"/signup"}
                href={isSignup ? "/login" : "/signup"}
                variant="body2"
              >
                {isSignup
                  ? "Already have an account? Login"
                  : "Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          {message && (
            <Typography variant="body2" color="error">
              {message}
            </Typography>
          )}
        </form>
      </Container>
    </div>
  );
};

export default FormL;
