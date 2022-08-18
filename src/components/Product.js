import { Favorite, Search, ShoppingCart } from '@mui/icons-material';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  margin: 8px;
  min-width: 300px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f7;
  position: relative;
`;

const Image = styled.img`
  height: 80%;
`;
const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.div`
  width: 30px;
  height: 40px;
  display: flex;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
  cursor: pointer;
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCart />
        </Icon>
        <Icon>
          <Search />
        </Icon>
        <Icon>
          <Favorite />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
