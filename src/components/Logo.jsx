import styled from "styled-components";
import logo from "./images/logo.png";

const Background = styled.div`
  margin: 0;
  padding: 0;
  height: auto;
  background-color: white;
  font-family: Arial, sans-serif;
  @media screen and (min-width: 768px) {
    height: auto;
  }
`;

const Container = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  @media (min-width: 576px) {
    max-width: 1212px;
    margin: 0 auto;
  }
`;

const LogoImg = styled.img`
  width: 100%;
  max-width: 480px;
`;

const Logo = () => {
  return (
    <Background>
      <Container>
        <LogoImg src={logo} alt="Logo" />
        <hr />
      </Container>
    </Background>
  );
};

export default Logo;
