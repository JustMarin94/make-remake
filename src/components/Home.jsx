import styled from "styled-components";
import logo from "./images/logo.png";
import frontpage from "./images/home1.jpg";

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

const Container1 = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  @media (min-width: 576px) {
    max-width: 1212px;
    margin: 0 auto;
  }
`;

const Logo = styled.img`
  width: 100%;
  max-width: 480px;
`;

const Title = styled.div`
  font-size: 84px;
  font-weight: bold;
  margin-top: 64px;
  margin-left: -11px;
  color: #735e59;

  @media (max-width: 576px) {
    font-size: 36px;
    margin-top: -25px;
    margin: 0;
  }
`;

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 576px) {
    flex-direction: row;
  }
`;

const GridItem = styled.div`
  padding: 20px;
  box-sizing: border-box;

  @media (min-width: 576px) {
    flex: 1;
  }
`;

const GridItemImg = styled.img`
  width: 407px;
  max-width: 100%;
  margin-left: 0;
  @media (min-width: 576px) {
    margin-left: 48px;
  }
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.a`
  color: #735e59;
  padding: 10px 20px;
  text-decoration: none;
  border: 1px solid;
  margin-top: 82px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 20px;
  width: 180px;
  height: 30px;
  text-align: center;

  @media (max-width: 576px) {
    margin-top: 40px;
  }

  &:hover {
    background-color: #0056b3;
  }
`;

function MyComponent() {
  return (
    <>
      <Background id="home">
        <Container1>
          <Logo src={logo} alt="Logo" />
          <hr />
          <GridContainer>
            <GridItem>
              <GridItemImg src={frontpage} alt="Image" />
            </GridItem>
            <GridItem>
              <RightContent>
                <Title marginTop={-40} marginLeft={13}>
                  Vaš dom, dizajniran.
                </Title>
                <Button href="#">Vidi više</Button>
              </RightContent>
            </GridItem>
          </GridContainer>
        </Container1>
      </Background>
    </>
  );
}

export default MyComponent;
