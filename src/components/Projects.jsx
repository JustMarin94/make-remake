import styled from "styled-components";
import project1 from "./images/project1.jpg";
import project2 from "./images/project2.jpg";
import project3 from "./images/project3.jpg";

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
  font-size: 26px;
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
  text-align: center;

  img {
    width: 100%;
    height: auto;
    max-width: 386px;
    max-height: 363px;
  }

  p {
    font-weight: 600;
    text-align: left;
    margin-left: 0px;
  }
`;

function MyComponent() {
  return (
    <Background id="projects">
      <Container>
        <Title>Što možemo napraviti za Vas</Title>
        <HorizontalLine />
        <Grid>
          <GridItem>
            <img src={project1} alt="Project 1" />
            <p>Project: Name 1</p>
            <p>Year: 2023</p>
            <p>Type: Type A</p>
          </GridItem>
          <GridItem>
            <img src={project2} alt="Project 2" />
            <p>Project: Name 2</p>
            <p>Year: 2024</p>
            <p>Type: Type B</p>
          </GridItem>
          <GridItem>
            <img src={project3} alt="Project 3" />
            <p>Project: Name 3</p>
            <p>Year: 2022</p>
            <p>Type: Type C</p>
          </GridItem>
        </Grid>
        <HorizontalLine />
      </Container>
    </Background>
  );
}

export default MyComponent;
