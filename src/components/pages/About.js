import React from "react";
import "./About.scss";
import { Container } from "react-bootstrap";

function About() {
  return (
    <Container className="about-cont">
      <div className="code-card">
        <img src="./images/avatar.png" alt="avatar" className="avatar-img" />
      </div>
      <div id="line-road"></div>
    </Container>
  );
}
export default About;
