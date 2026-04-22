import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
  DiPython,
} from "react-icons/di";
import {
  SiMysql,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiSpringboot,
  SiSpring,
  SiSap,        // ✅ SAP icon added
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      {/* Java */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>

      {/* Python */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>

      {/* SAP */}
      <Col xs={4} md={2} className="tech-icons">
        <SiSap />
      </Col>

      {/* Spring Boot */}
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
      </Col>

      {/* Spring */}
      <Col xs={4} md={2} className="tech-icons">
        <SiSpring />
      </Col>

      {/* HTML */}
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>

      {/* CSS */}
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>

      {/* JavaScript */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      {/* React */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      {/* Node.js */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>

      {/* MongoDB */}
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>

      {/* MySQL */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>

      {/* Git */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>

      {/* Tailwind */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>

    </Row>
  );
}

export default Techstack;