import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Projects/sughan_new_pic.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
              I'm currently pursuing my B.Tech in Information Technology at
              St. Joseph’s Institute of Technology, Chennai.
              <br />
              <br />I have a deep passion for
              <i>
                <b className="purple"> Web development </b>
              </i>
              and I’m proficient in technologies like
              <i>
                <b className="purple"> React.js</b>
              </i>
              , and backend tools like
              <i>
                <b className="purple"> Springboot, MySql, MongoDB</b>.
              </i>
              <br />
              <br />
              I'm especially interested in building interactive and responsive web applications, along with working on SAP ERP modules (FI, MM, SD) and ABAP development. I am currently seeking internship opportunities to apply my skills and grow professionally.
              <br />
              <br />
              I also enjoy exploring areas like{" "}
<i>
  <b className="purple">full-stack development</b>
</i>{" "}
along with{" "}
<i>
  <b className="purple">SAP ERP modules (FI, MM, SD)</b>
</i>{" "}
and{" "}
<i>
  <b className="purple">ABAP development</b>
</i>{" "}
while creating smooth user experiences with modern libraries and frameworks.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
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
                  href="https://github.com/SUGHAN14"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/sughan_m"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sughan-m-b17048216/"
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
