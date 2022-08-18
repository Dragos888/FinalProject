import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: #edd0d5;
  color: white;
  display: flex;
  aling-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 500px;
`;

const Banner = () => {
  return <Container>In God I trust</Container>;
};

export default Banner;
