import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from '../Responsive';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: '10px' })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) =>
    props.type === 'filled' ? 'black' : 'transparent'};
  color: ${(props) => props.type === 'filled' && 'white'};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 300px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Summary = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 40vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 300;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 500;
  cursor: pointer;
`;

const TopTexts = styled.div`
  display: flex;
  ${mobile({ display: 'none' })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const ProductQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductQuantity = styled.div`
  font-size: 20px;
  margin: 5px;
  ${mobile({ margin: '5px 15px' })}
`;

const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: 200px;
  ${mobile({ marginBottom: '20px' })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Cart = () => {
  return (
    <Container>
      <Banner />
      <NavBar />
      <Wrapper>
        <Title>Check your shoes</Title>
        <Top>
          <TopButton>EXPLORE MORE </TopButton>
          <TopTexts>
            <TopText>Shopping bag(2)</TopText>
            <TopText>Your wishlist(1)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECK OUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a049833b-b8a0-4fc5-9977-ee5dd52622d2/jordan-7-retro-younger-shoes-NqBfn4.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b>Nike PH
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>4040699
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b>41
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductQuantityContainer>
                  <Add />
                  <ProductQuantity>1</ProductQuantity>
                  <Remove />
                </ProductQuantityContainer>
                <ProductPrice>$250.30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/758adf34-51ab-4ee6-b3df-01dd4d4323cd/air-jordan-9-chile-red-ct8019-600-release-date.jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b>Jordan 9 High Top
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>898901
                  </ProductId>
                  <ProductColor color="red" />
                  <ProductSize>
                    <b>Size:</b>42
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductQuantityContainer>
                  <Add />
                  <ProductQuantity>1</ProductQuantity>
                  <Remove />
                </ProductQuantityContainer>
                <ProductPrice>$250.30</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal:</SummaryItemText>
              <SummaryItemPrice>$500.60</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping:</SummaryItemText>
              <SummaryItemPrice>$5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount:</SummaryItemText>
              <SummaryItemPrice> -$5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total:</SummaryItemText>
              <SummaryItemPrice>$500.60</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
