import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBars } from "@fortawesome/free-solid-svg-icons";
import "./SideNavbar.scss";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";
// import SocialIcons from "./SocialIcons";

function SideNavbar(p) {
  function handleClick(e) {
    document.querySelector(".container-side-nav").style.width = "250px";
    //   document.querySelector(".navbar-container").classList.add("transition");
  }
  function handleClose() {
    document.querySelector(".container-side-nav").style.width = "0";
    // document
    //   .querySelector(".container-side-nav")
    //   .classList.remove("transition");
  }

  return (
    <>
      <div onClick={handleClick} className="burger-icon-container">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="container-side-nav">
        <FontAwesomeIcon
          icon={faWindowClose}
          className="fa-close"
          onClick={handleClose}
        />{" "}
        <NavLink exact to="/">
          <FontAwesomeIcon icon={faHome} className="fa-side-home" />
        </NavLink>
        <nav className="nav">
          <div className="side-navbar-container">
            <NavLink
              exact
              to="/"
              className="side-nav-link side-home"
              activeClassName="main-side-nav-active"
              onClick={handleClose}
            >
              HOME
            </NavLink>
            <NavLink
              exact
              to="/about"
              className="side-nav-link side-about"
              activeClassName="main-side-nav-active"
              onClick={handleClose}
            >
              ABOUT
            </NavLink>
            <NavLink
              exact
              to="/work"
              className="side-nav-link side-gallery"
              activeClassName="main-side-nav-active"
              onClick={handleClose}
            >
              WORK
            </NavLink>
            <NavLink
              exact
              to="/contact"
              className="side-nav-link side-contact"
              activeClassName="main-side-nav-active"
              onClick={handleClose}
            >
              CONTACT
            </NavLink>
            {/* <div className="side-nav-link language">
              <SocialIcons className="on-side" />
            </div> */}
          </div>
        </nav>
        {/* <FontAwesomeIcon icon={faPhone} className="fa-side-phone" />
        <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-side-map" />
        <SocialIcons className="side-social-icons" /> */}
      </div>
    </>
  );
}
export default SideNavbar;
