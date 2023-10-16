import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/view-easter-eggs-with-cartoon-faces.png";
import chatify from "../../Assets/Projects/ved-blog-1.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/coding-language-3d-render-icon-illustration_1000714-2382.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="School managemnt system " 
              description="A backend REST API which can perform CRUD operations."
              ghLink="https://github.com/govindacv/School_Management_System-REST-API-.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="HTML tag counter "
              description="A application which can count the accurence of number of tags in a HTML file"
              ghLink="https://github.com/govindacv/HTML_tag_counter.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Social media sentimental analysis"
              description="A application which can analyze if the given tweet is either positve,negetive or neutral"
              ghLink="https://github.com/govindacv/social-media-sentimental-analysys.git"
                             
            />
          </Col>



  


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
