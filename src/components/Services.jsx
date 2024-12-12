import styled from "styled-components";
import service1 from "./images/service1.jpg";
import service2 from "./images/service2.jpg";
import service3 from "./images/service3.jpg";

const Background = styled.div`
  margin: 0;
  padding: 0;
  height: auto;
  background-color: #d89779;
  font-family: Arial, sans-serif;
  @media screen and (min-width: 768px) {
    height: 768px;
  }
`;

const Container = styled.div`
  max-width: 1212px;
  margin: 0 auto;
  padding: 20px;

  @media screen and (min-width: 992px) {
    padding: 20px 40px;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  text-align: left;
  margin-bottom: -10px;
  color: #735e59;
  @media screen and (min-width: 768px) {
    font-size: 66px;
    margin-top: 80px;
    margin-bottom: -6px;
  }
`;

const HorizontalLine = styled.hr`
  border: 1px solid;
  margin: 20px 0;
  color: #735e59;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    margin-left: 0;
  }
`;

const GridItem = styled.div`
  text-align: left;

  img {
    width: 100%;
    height: auto;
    max-width: 386px;
    max-height: 330px;
  }

  p {
    font-weight: 600;
  }
`;

const MyComponent = () => {
  return (
    <>
      <Background id="services">
        <Container>
          <Title>Što možemo napraviti za Vas</Title>
          <HorizontalLine />
          <Grid>
            <GridItem>
              <h5>01</h5>
              <img src={service1} alt="Project 1" />
              <p>Home Staging</p>
            </GridItem>
            <GridItem>
              <h5>01</h5>
              <img src={service2} alt="Project 1" />
              <p>Home Staging</p>
            </GridItem>
            <GridItem>
              <h5>01</h5>
              <img src={service3} alt="Project 1" />
              <p>Home Staging</p>
            </GridItem>
          </Grid>
        </Container>
      </Background>
    </>
  );
};

export default MyComponent;
