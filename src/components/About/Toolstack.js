import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiEclipseide,
  SiIntellijidea,
  SiDocker,
  SiPostman,
  SiMongodb,
  SiMysql,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* VS Code */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>

      {/* Eclipse */}
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide />
      </Col>

      {/* IntelliJ IDEA */}
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>

      {/* Docker */}
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>

      {/* Postman */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>

      {/* MongoDB Compass (use MongoDB icon) */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>

      {/* MySQL Workbench (use MySQL icon) */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>

      {/* GitHub */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
    </Row>
  );
}

export default Toolstack;
