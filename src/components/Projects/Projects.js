import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Project images
import spotify from "../../Assets/Projects/spotify.jpg";
import mediconnect from "../../Assets/Projects/mediconnect.jpg";
import ecommerce from "../../Assets/Projects/ecommerce.jpg";
import face from "../../Assets/Projects/Face-recognition-1-370x253.jpg";
import githunt from "../../Assets/Projects/Githunt.jpg";
import quizapp from "../../Assets/Projects/marvelquiz.jpg";
import weatherapp from "../../Assets/Projects/weatherapp.jpg";
import todolist from "../../Assets/Projects/todolist.jpg";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotify}
              isBlog={false}
              title="Spotify Clone"
              description="A full-stack music streaming application inspired by Spotify, featuring user authentication, playlists, and seamless audio playback."
              ghLink="https://github.com/SUGHAN14/spotify-clone"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={face}
              isBlog={false}
              title="Face Recognition Attendance Marking System"
              description="An AI-powered face recognition and attendance system with real-time authentication, liveness detection, and automated Excel/email reporting."
              ghLink="https://github.com/SUGHAN14/Face-Detection-and-Attendance-Marking"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Multitenant Ecommerce using Springboot"
              description="A Spring Boot-based e-commerce application enabling buyers and sellers to manage products, orders, and carts with secure authentication and seamless multi-tenant support."
              ghLink="https://github.com/SUGHAN14/Ecommerce"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
