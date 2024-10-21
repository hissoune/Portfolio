import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
<Card className="quote-card-view">
<Card.Body>
  <blockquote className="blockquote mb-0">
    <p style={{ textAlign: "justify" }}>
      Hello, I am <span className="purple"> Khalid Hissoune</span> from 
      <span className="purple">  Safi, Morocco.</span>
      <br />
      I am currently pursuing my studies at YouCode, where I am focused on developing my skills in full-stack web development.
      <br />
      <br />
      In addition to coding, I enjoy engaging in various activities that help me stay balanced and creative.
    </p>
    <ul>
      <li className="about-activity">
        <ImPointRight /> Playing Video Games
      </li>
      <li className="about-activity">
        <ImPointRight /> Watching Anime
      </li>
      <li className="about-activity">
        <ImPointRight /> Playing Soccer
      </li>
    </ul>
    <p style={{ color: "rgb(155 126 172)" }}>
      "Strive to create solutions that make a meaningful impact."
    </p>
    <footer className="blockquote-footer">Khalid Hissoune</footer>
  </blockquote>
</Card.Body>

</Card>

  );
}

export default AboutCard;
