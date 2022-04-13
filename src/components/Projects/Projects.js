import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import myapi from "../../Assets/Projects/my-api.png";
import calc from "../../Assets/Projects/calc.png";
import exceljee from "../../Assets/Projects/exceljee.png";
import covid from "../../Assets/Projects/covid.png";
import pharmeasy from "../../Assets/Projects/pharmeasy.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myapi}
              title="My-Api"
              description="Fake bulk API for some sample data to utilize. Endpoints provided are /users/, /products/, /foods/."
              link="https://github.com/th3qui85ly/my-api"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pharmeasy}
              title="Pharmeasy"
              description="Project imitating the original site Pharmeasy.com. Built using HTML, CSS, JS. Utilized some advanced JS concepts in the project."
              link="https://github.com/th3qui85ly/pharmeasy-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exceljee}
              title="ExcelJEE"
              description="Online Learning System built specialized for JEE Preparation. Project contains student/teacher/admin dashboard along wit rich features like time-table, fees payment, email auth, zoom meetings scheduling and joining, etc."
              link="https://github.com/th3qui85ly/exceljee"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              title="Covid Website"
              description="Covid-19 Website displaying some key information about active/demised/discharged patients of Covid-19. Project built on HTML, CSS, JS."
              link="https://github.com/th3qui85ly/covid"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calc}
              title="React Calculator"
              description="Simple arithmetic calculator built using React"
              link="https://github.com/th3qui85ly/react-calc-app"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
