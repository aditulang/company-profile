import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="#"
              // target="_blank"
              id="navbar-brand"
            >
              CV Teknologi Nusantara
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Designed by aditt. Coded by Creative Tim
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-betwe"
            isOpen={collapseOpen}
            navbar
          >
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  href="#visi-misi-komitmen"
                  // onClick={(e) => e.preventDefault()}
                >
                  <p>Visi misi dan Komitmen</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#struktur">
                  <p>Struktur organisasi</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#layanan">
                  <p>Layanan kami</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo">
                  <p>Teknologi kami</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo">
                  <p>Portopolio</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
