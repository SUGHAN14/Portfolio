import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sughan</span>{" "}
            from <span className="purple">Chennai, India.</span>
            <br />
            I’m currently pursuing my B.Tech in Information Technology at
            St. Joseph’s Institute of Technology.
            <br />
            I have a strong interest in Java Backend development, full-stack technologies, and SAP ERP modules (FI, MM, SD), along with ABAP development. I am currently seeking internship opportunities to apply and enhance my skills through real-world projects.
            <br />
            <br />
            Apart from coding, here are a few activities I enjoy:
          </p>
          <ul>
           <li className="about-activity">
            <ImPointRight /> Reading books
          </li>
          <li className="about-activity">
            <ImPointRight /> Watching movies and TV shows
          </li>
          <li className="about-activity">
            <ImPointRight /> Playing outdoor games
          </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always learning, always building!"{" "}
          </p>
          <footer className="blockquote-footer">Sughan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
