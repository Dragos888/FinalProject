import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';

const Container = styled.div`
  height: 60px;
`;
const Language = styled.span`
  font-size: 20px;
  cursor: pointer;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const SearchContainer = styled.div`
  border-radius: 1px solid lightgray;
  display: flex;
  aling-items: center;
  margin-left: 25px;
  padding: 5px;
  cursor: pointer;
`;
const Input = styled.input``;
const Menu = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>Ro</Language>
          <SearchContainer>
            <Input />
            <Search />
          </SearchContainer>
        </Left>
        <Center>
          <Logo />
          SNEAKY
        </Center>
        <Right>
          <Menu>Register</Menu>
          <Menu>Sing in</Menu>
          <Menu>
            <Badge badgeContent={4} color="primary">
              <ShoppingCart />
            </Badge>
          </Menu>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
