import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Govinda C V </span>
            from <span className="purple"> Banglore, India.</span>
            <br /> I completed my Graduation <span className="purple"> (B.E) </span> in the field of Information science and technology <span className="purple">(I.S.E) </span> in the year <span className="purple">2022 </span>.
            <br />
            Additionally,I am currently  pursuing <span className="purple">java full stack </span> course.
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing  video games
            </li>
             
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            {/* "Strive to build things that make a difference!"{" "} */}
          </p>
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
