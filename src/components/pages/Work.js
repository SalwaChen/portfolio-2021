import React from "react";
import "./Work.scss";
import { Container } from "react-bootstrap";

function Work() {
  return (
    <Container className="work-cont">
      {/* <a href="https://www.freecodecamp.org/news/how-to-get-a-developer-job-in-less-than-a-year-c27bbfe71645/#">
        Link that helped me
      </a>
      <a href="https://dev.to/ulyavrubel/how-i-found-a-junior-frontend-developer-job-in-2-weeks-after-1-year-of-self-learning-1lbn">
        Read tonight
      </a> */}
      <div id="cards-container">
        <div className="code-card">
          <img src="./images/clock.png" alt="clock" className="code-img" />
        </div>
        <div className="code-card">
          <img src="./images/map.png" alt="map" className="code-img" />
        </div>
        <div className="code-card">
          <img
            src="./images/calculator.png"
            alt="calculator"
            className="code-img"
          />
        </div>
        <div className="code-card">
          <img src="./images/dopping.png" alt="dopping" className="code-img" />
        </div>
        <div className="code-card">
          <img src="./images/drum.png" alt="drum" className="code-img" />
        </div>
        <div className="code-card">
          <img src="./images/quotes.png" alt="quotes" className="code-img" />
        </div>
        <div className="code-card">
          <img
            src="./images/temperature.png"
            alt="temperature"
            className="code-img"
          />
        </div>
        <div className="code-card">
          <img src="./images/spider.png" alt="spider" className="code-img" />
        </div>
        <div className="code-card">
          <img src="./images/weather.png" alt="weather" className="code-img" />
        </div>
      </div>
    </Container>
  );
}
export default Work;
