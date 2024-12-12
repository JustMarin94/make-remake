import Home from "./Home";
import Home2 from "./Home2";
import TheTeam from "./TheTeam";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <>
      <NavBar />
      <Home />
      <Home2 />
      <TheTeam />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};
export default Homepage;
