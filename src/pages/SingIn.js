import React from 'react';
import styled from 'styled-components';
import { mobile } from '../Responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('https://wallpaper.dog/large/17049774.jpg') center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  ${mobile({ width: '75%' })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column; ;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 17px;
  text-decoration: underline;
  cursor: pointer;
`;

const SingIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sing In</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>Sing In</Button>
          <Link>Forgot your password?</Link>
          <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default SingIn;
