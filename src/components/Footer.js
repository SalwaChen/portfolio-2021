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
          <span>Find Us</span>
          <span>Paris, France</span>
        </div>
        <div className="footer-icons">
          <SocialIcons className="social-icons" />
          {/* <ul className="social-menu-footer">
            <li>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="social-icons"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="fa-footer instagram"
                />
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="social-icons"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="fa-footer facebook"
                />
              </a>
            </li>
            <li>
              <a
                href="s"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icons"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="fa-footer youtube"
                />
              </a>
            </li>
          </ul> */}
        </div>
        <div className="contact-us">
          Contact Us
          <div>555-555-555</div>
        </div>
      </div>
    </Container>
  );
}
export default Footer;
