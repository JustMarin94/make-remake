import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Drawer } from "@mui/material";

const NavbarContainer = styled.nav`
  background-color: white;
  color: black;
  padding: 10px 20px;
  position: sticky;
  top: 0;
  z-index: 999;
  text-decoration: none;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  margin-right: 35px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #735e59;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #6d8ea8;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
    margin-right: auto;
  }
`;

const DrawerList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 20px;
  width: 250px;
`;

const DrawerNavItem = styled.li`
  margin-bottom: 15px;
`;

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const yOffset = -60;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      if (window.location.pathname !== "/") {
        window.location.href = "/#" + id;
      } else {
        window.scrollTo({ top: y, behavior: "smooth" });
      }

      if (window.location.pathname === "/" || window.location.pathname === "") {
        setTimeout(() => {
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 0);
      }

      setDrawerOpen(false);
    }
  };

  const DrawerListComponent = (
    <DrawerList>
      <DrawerNavItem>
        <NavLink onClick={() => scrollToSection("home")} href="#">
          <Link to="/" style={{ textDecoration: "none", color: "#735e59" }}>
            Home
          </Link>
        </NavLink>
      </DrawerNavItem>
      <DrawerNavItem>
        <NavLink href="#">
          <Link
            to="/#team"
            onClick={() => scrollToSection("team")}
            style={{ textDecoration: "none", color: "#735e59" }}
          >
            The Team
          </Link>
        </NavLink>
      </DrawerNavItem>
      <DrawerNavItem>
        <NavLink onClick={() => scrollToSection("services")} href="#">
          Services
        </NavLink>
      </DrawerNavItem>
      <DrawerNavItem>
        <NavLink onClick={() => scrollToSection("projects")} href="#">
          Projects
        </NavLink>
      </DrawerNavItem>
      <DrawerNavItem>
        <NavLink onClick={() => scrollToSection("contact")} href="#">
          Contact
        </NavLink>
      </DrawerNavItem>
      <DrawerNavItem>
        <NavLink href="#">
          <Link to="/blog" style={{ textDecoration: "none", color: "#735e59" }}>
            Blog
          </Link>
        </NavLink>
      </DrawerNavItem>
    </DrawerList>
  );

  return (
    <NavbarContainer>
      <HamburgerIcon onClick={toggleDrawer(true)}>☰</HamburgerIcon>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {DrawerListComponent}
      </Drawer>
      <NavList>
        <NavItem>
          <NavLink onClick={() => scrollToSection("home")} href="#">
            <Link to="/" style={{ textDecoration: "none", color: "#735e59" }}>
              Home
            </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <Link
              to="/#team"
              onClick={() => scrollToSection("team")}
              style={{ textDecoration: "none", color: "#735e59" }}
            >
              The Team
            </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => scrollToSection("services")} href="#">
            Services
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => scrollToSection("projects")} href="#">
            Projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => scrollToSection("contact")} href="#">
            Contact
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <Link
              to="/blog"
              style={{ textDecoration: "none", color: "#735e59" }}
            >
              Blog
            </Link>
          </NavLink>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;
