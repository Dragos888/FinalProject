import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  aling-items: center;
  justify-content: center;
`;

const Banner = () => {
  return <Container>In God I trust</Container>;
};

export default Banner;
