import { React } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHome,
//   faEnvelope,
//   faImages,
//   faAddressCard,
//   faInfo,
// } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

function Navbar() {
  return (
    <Container className="cont-nav">
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink
            exact
            to="/"
            className="nav-links home"
            activeClassName="main-nav-active"
          >
            {/* <FontAwesomeIcon className="fa-nav" icon={faHome} /> */}
            HOME
          </NavLink>
          <NavLink
            exact
            to="/about"
            className="nav-links about"
            activeClassName="main-nav-active"
          >
            {/* <FontAwesomeIcon className="fa-nav" icon={faAddressCard} /> */}
            ABOUT
          </NavLink>
          <NavLink
            exact
            to="/work"
            className="nav-links gallery"
            activeClassName="main-nav-active"
          >
            {/* <FontAwesomeIcon className="fa-nav" icon={faImages} /> */}
            WORK
          </NavLink>
          <NavLink
            exact
            to="/contact"
            className="nav-links contact"
            activeClassName="main-nav-active"
          >
            {/* <FontAwesomeIcon className="fa-nav" icon={faEnvelope} /> */}
            CONTACT
          </NavLink>
        </div>
      </nav>
    </Container>
  );
}

export default Navbar;
