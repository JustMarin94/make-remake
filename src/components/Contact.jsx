import styled from "styled-components";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import contact from "./images/contact.jpg";

const Background2 = styled.div`
  margin: 0;
  padding: 0;
  height: auto;
  background-color: #8aa094;
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
    grid-template-columns: repeat(2, 1fr);
    margin-left: 0;
  }
`;

const GridItem = styled.div`
  text-align: center;

  img {
    width: 100%;
    height: auto;
  }

  @media screen and (min-width: 992px) {
    &.left {
      margin-left: -50px;
      width: 740px;
    }
    &.right {
      font-size: 20px;
      text-align: left;
      margin-left: 60px;
      margin-top: 46px;
    }
  }
`;

const ContactInfo = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    margin: 0;
  }

  p {
    margin: 0;
  }
`;

const SocialIcons = styled.div`
  grid-template-columns: repeat(2, 1fr);

  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 10px;
    display: flex;
    flex-direction: column;

    img {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }

    h3 {
      margin: 0;
    }
  }
`;

function MyComponent() {
  return (
    <Background2 id="contact">
      <Container>
        <Title>Jedva cekamo sljedeci projekt.</Title>
        <HorizontalLine />
        <Grid>
          <GridItem className="left">
            <img src={contact} alt="Project" />
          </GridItem>
          <GridItem className="right">
            <ContactInfo>
              <h3>ADDRESS</h3>
              <p>123 Anywhere St., Any City ST 12345</p>

              <h3>PHONE</h3>
              <p>(123) 456-7890</p>
              <h3>EMAIL</h3>
              <p>hello@reallygreatsite.com</p>
            </ContactInfo>
            <SocialIcons>
              <h3>SOCIAL</h3>
              <div>
                <img src={facebook} alt="Facebook Icon" />
                <img src={instagram} alt="Instagram Icon" />
              </div>
            </SocialIcons>
          </GridItem>
        </Grid>
      </Container>
    </Background2>
  );
}

export default MyComponent;
