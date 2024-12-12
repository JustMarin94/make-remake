import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: black;
  padding: 20px;
  padding-left: 120px;
  text-align: left;
  color: white;
`;

const FooterText = styled.p`
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Designed by Marin Dundovic</FooterText>
    </FooterContainer>
  );
};

export default Footer;
