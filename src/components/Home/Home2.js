import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/143531795.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,

} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './Home.css'
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              <br />
              <br />
              I have strong expertise in web development technologies such as
              <i>
                <b className="purple">  HTML, CSS, and JavaScript . </b>
              </i>
              <br />
              <br />
              My key interests lie in creating innovative web applications and solutions, particularly in
              <i>
                <b className="purple">  backend development with PHP and the Laravel framework. </b>
              </i>
              <br />
              <br />
              In addition, I am passionate about building scalable and efficient products using <b className="purple">Node.js</b> and
              <i>
                <b className="purple"> modern JavaScript libraries and frameworks </b>
              </i>
              such as
              <i>
                <b className="purple">React.js and Express.js.</b>
              </i>
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid rounded-circle bordered-image" alt="avatar" />
            </Tilt>
          </Col>

        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/hissoune"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/khalid-hissoune-1808532a5/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
