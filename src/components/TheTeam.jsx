import styled from "styled-components";
import man from "./images/team1.jpg";
import woman from "./images/team2.jpg";

const Background = styled.div`
  margin: 0;
  padding: 0;
  height: auto;
  background-color: white;
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
  margin-bottom: 60px;
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
    grid-template-columns: repeat(2, 1fr);
    margin-left: 0;
  }
`;

const GridItem = styled.div`
  text-align: center;

  img {
    width: 350px;
    height: auto;
  }

  p {
    font-weight: 600;
  }
`;

const YourComponent = () => {
  return (
    <>
      <Background id="team">
        <Container>
          <Title>Upoznaj nas :</Title>
          <HorizontalLine />
          <Grid>
            <GridItem>
              <img src={woman} alt="Matea" />
              <p>Matea</p>
            </GridItem>
            <GridItem>
              <img src={man} alt="Leo" />
              <p>Leo</p>
            </GridItem>
          </Grid>
        </Container>
      </Background>
    </>
  );
};

export default YourComponent;
