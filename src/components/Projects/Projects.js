import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Project images
import mediconnect from "../../Assets/Projects/mediconnect.jpg";
import ecommerce from "../../Assets/Projects/ecommerce.jpg";
import face from "../../Assets/Projects/Face-recognition-1-370x253.jpg";

// 👉 Add a SAP image in your folder (sap.jpg or sap.png)
import sap from "../../Assets/Projects/sap.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {/* Face Recognition */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={face}
              isBlog={false}
              title="Face Recognition Attendance Marking System"
              description="An AI-powered face recognition and attendance system with real-time authentication, liveness detection, and automated Excel/email reporting."
              ghLink="https://github.com/SUGHAN14/Face-Detection-and-Attendance-Marking"
            />
          </Col>

          {/* Ecommerce */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Multitenant Ecommerce using Springboot"
              description="A Spring Boot-based e-commerce application enabling buyers and sellers to manage products, orders, and carts with secure authentication and seamless multi-tenant support."
              ghLink="https://github.com/SUGHAN14/Ecommerce"
            />
          </Col>

          {/* ✅ SAP Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sap}
              isBlog={false}
              title="SAP S/4HANA Implementation Project"
              description="Worked on SAP SD, MM, and FI modules by configuring enterprise structure elements like Plant, Company Code, and Storage Location. Performed basic ABAP configurations such as maintaining employee data and understanding core business processes as a fresher."
              
              isSAP={true}
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;