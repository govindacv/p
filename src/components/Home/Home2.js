import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/logo.png";
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
              I'm a software developer
              <br />
              <br />I am fluent in   
              <i>
                <b className="purple">   java, springs and backend technologies. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building  &nbsp;
              <i>
                <b className="purple">backend appications. </b>  
                 {" "}
                <b className="purple">
                  
                </b>
              </i>
              <br />
              <br />
               
                <b className="purple"> </b>  
              <i>
                <b className="purple">
                  {" "}
                  
                </b>
              </i>
              &nbsp;  
              <i>
                <b className="purple">  </b>
              </i>
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
                  href="https://github.com/govindacv"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">

              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/govinda-c-v-73a087228/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
