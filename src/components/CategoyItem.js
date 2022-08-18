import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  margin: 6px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
`;
const Title = styled.h1`
  margin-buttom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop now</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
