import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authActions } from '../store';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();
  const dipatch = useDispatch();
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isSingup, setIsSingup] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async (type = 'login') => {
    const res = await axios
      .post(`http://localhost:3500/api/user/${type} `, {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => {
        console.log(err);
      });

    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    if (isSingup) {
      sendRequest('singup')
        .then(() => dipatch(authActions.login()))
        .then(() => navigate('/blogs'))
        .then((data) => console.log(data));
    } else {
      sendRequest()
        .then(() => dipatch(authActions.login()))
        .then(() => navigate('/blogs'))
        .then((data) => console.log(data));
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={600}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin="auto"
          marginTop={7}
          borderRadius={10}
        >
          <Typography variant="h4" padding={2} textAling={'center'}>
            {isSingup ? 'Singup' : 'Login'}
          </Typography>
          {isSingup && (
            <TextField
              name="name"
              onChange={handleChange}
              value={inputs.name}
              placeholder="Name"
              margin="normal"
            />
          )}{' '}
          <TextField
            name="email"
            onChange={handleChange}
            value={inputs.email}
            type={'email'}
            placeholder="Email"
            margin="normal"
          />
          <TextField
            name="password"
            onChange={handleChange}
            value={inputs.password}
            type={'password'}
            placeholder="Password"
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ borderRadius: 3, marginTop: 3 }}
          >
            Submit
          </Button>
          <Button
            onClick={() => setIsSingup(!isSingup)}
            variant="contained"
            sx={{ borderRadius: 3, marginTop: 3 }}
          >
            Change to {isSingup ? 'Login' : 'Signup'}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
