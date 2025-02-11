import styled from "styled-components";
import frontpage2 from "./images/home2.jpg";
import frontpage3 from "./images/home3.jpg";
import { Typography } from "@mui/material";

const Background = styled.div`
  margin: 0;
  padding: 0;
  height: auto;
  background-color: #8aa094;
  font-family: Arial, sans-serif;
  display: flex;
  align-items: center;
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
/*

const Title = styled.h6`
  font-size: 10px;
  text-align: left;
  margin-bottom: -10px;
  color: #735e59;
  @media screen and (min-width: 768px) {
    font-size: 66px;
    margin-top: 12px;
    margin-bottom: 113px;
  }
`;
*/
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
  img {
    width: 100%;
    height: auto;
    max-width: 570px;
    max-height: 363px;
  }
  p {
    font-weight: 600;
    font-size: 20px;
    color: #735e59;
  }
`;

function MyComponent() {
  return (
    <>
      <Background>
        <Container>
          <Grid>
            <GridItem>
              <Typography variant="h3" sx={{ color: "#735e59" }}>
                Dobro došli u Make Remake, vašu destinaciju za obnovu starog
                namještaja.
              </Typography>
              <br />
              <Typography variant="body1" sx={{ color: "#735e59" }}>
                Kod nas svaki komad namještaja ima svoju priču, a mi smo tu da
                mu udahnemo novi život.
              </Typography>
              <Typography variant="body1" sx={{ color: "#735e59" }}>
                Posvećeni smo obnovi i osvježavanju vaših omiljenih komada
                namještaja, bilo da su to stolice, stolovi, kredenci ili neki
                drugi komad.
              </Typography>
              <Typography variant="body1" sx={{ color: "#735e59" }}>
                Sviđa vam se dizajn vašeg namještaja, ali je izgubio sjaj ili mu
                boja ne odgovara vašem prostoru?
              </Typography>
              <Typography variant="body1" sx={{ color: "#735e59" }}>
                Naša usluga obnove prilagođena je vašim željama i potrebama kako
                bismo zajedno stvorili savršeni namještaj koji odražava vašu
                osobnost i stil.
              </Typography>
            </GridItem>
            <GridItem>
              <img src={frontpage2} alt="slika1" />
              <img src={frontpage3} alt="slika2" />
            </GridItem>
          </Grid>
        </Container>
      </Background>
    </>
  );
}

export default MyComponent;
