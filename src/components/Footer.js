import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  paddin: 20px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const Logo = styled.h1``;
const SocialMediaContainer = styled.div`
  display: flex;
`;
const MediaAppIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Description = styled.p`
  margin: 14px 0px;
`;
const Title = styled.h1`
  margin-bottom: 20px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 6px;
`;
const ContactItem = styled.dv``;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SNEAKY</Logo>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
          debitis sint magnam velit amet voluptate, accusamus, fugit esse
          temporibus cupiditate similique? Praesentium consectetur quisquam
          excepturi beatae? Deserunt maiores reprehenderit veritatis.
        </Description>
        <SocialMediaContainer>
          <MediaAppIcon color="3B5999">
            <Facebook />
          </MediaAppIcon>
          <MediaAppIcon color="E4405F">
            <Instagram />
          </MediaAppIcon>
          <MediaAppIcon color="55ACEE">
            <Twitter />
          </MediaAppIcon>
        </SocialMediaContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
    </Container>
  );
};

export default Footer;
