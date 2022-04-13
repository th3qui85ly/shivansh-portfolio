import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shivansh Srivastava </span>
            from <span className="purple"> Lucknow, India.</span>
            <br />I am an aspiring MERN Stack developer, completed my BCA in 2021.
            <br />
            <br />
            Apart from coding, I love...
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening music
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Binging
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Talk is cheap. Show me the code."{" "}
          </p>
          <footer className="blockquote-footer">Linus Torvalds</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
