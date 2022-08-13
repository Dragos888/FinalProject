import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: coral;
  position: relative;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justifiy-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  opacity: 0.7;
`;

const Wrapper = styled.div`
  height: 100%;
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.image`
  height: 100%;
`;
const InfoContainer = styled.div`
  flex: 1;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction=" left">
        <ArrowLeft />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image src="https://content.sportslogos.net/news/2015/01/Jumpman-Logo-Lawsuit.png"></Image>
          </ImgContainer>
          <InfoContainer></InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
