import {
  Email,
  Facebook,
  Fax,
  Instagram,
  LocationCity,
  PhoneIphone,
  Twitter,
} from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../Responsive';

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: 'column' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
`;

const MediaContainer = styled.div`
  display: flex;
`;

const MediaAppIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: 'none' })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItems = styled.li`
  width: 40%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: '#fff8f8' })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Sneaky</Logo>
        <Description>
          You can always count on Sneaky for the best products and services ,
          this is some dummy text tbh.Lets not focus more then we should on this
          description.Peace out.
        </Description>
        <MediaContainer>
          <MediaAppIcon color="3B5999">
            <Facebook />
          </MediaAppIcon>
          <MediaAppIcon color="E4405F">
            <Instagram />
          </MediaAppIcon>
          <MediaAppIcon color="55ACEE">
            <Twitter />
          </MediaAppIcon>
        </MediaContainer>
      </Left>
      <Center>
        <Title>Jump Around in Page</Title>
        <List>
          <ListItems>Home</ListItems>
          <ListItems>Home</ListItems>
          <ListItems>Home</ListItems>
          <ListItems>Home</ListItems>
          <ListItems>Home</ListItems>
          <ListItems>Home</ListItems>
        </List>
      </Center>
      <Right>
        <Title>Contacts</Title>
        <ContactItem>
          <LocationCity style={{ marginRight: '10px' }} /> Location Str.33
        </ContactItem>
        <ContactItem>
          <PhoneIphone style={{ marginRight: '10px' }} /> 0743123123
        </ContactItem>
        <ContactItem>
          <Email style={{ marginRight: '10px' }} /> sneaky@yahoo.com
        </ContactItem>
        <ContactItem>
          <Fax style={{ marginRight: '10px' }} />
          fax@sneaky000
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
