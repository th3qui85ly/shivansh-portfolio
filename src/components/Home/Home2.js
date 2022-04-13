import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myAvatar.png";
import Tilt from "react-parallax-tilt";

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
              I fell in love with programming and have learnt enthusiastically about web techs, DSA, problem solving and front-end designing.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Javascript, C++ and Java. </b>
              </i>
              <br />
              <br />
              My field of interests are building new &nbsp;
              <i>
                <b className="purple">Projects on Web Technologies </b> and
                also in areas related to{" "}
                <b className="purple">
                  Front-end developing and Digital designing (UI/UX).
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing projects
              using <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}
export default Home2;
