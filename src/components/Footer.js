import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";
import SocialIcons from "./SocialIcons";
import { Container } from "reactstrap";

function Footer() {
  return (
    <Container fluid className="footer-container">
      <div className="footer-row">
        <div className="address">
          <span>Location</span>
          <span>Tel-aviv Yafo</span>
        </div>
        <div className="footer-icons">
          <SocialIcons className="social-icons" />
        </div>
        <div className="contact-us">
          Contact Me
          <div>Salwachen1@gmail.com</div>
        </div>
      </div>
    </Container>
  );
}
export default Footer;
