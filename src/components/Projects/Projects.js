import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cinemaManager from "../../Assets/88d5b8e0a3cccc0637bbff0d4f909b3b.jpg";
import coursemanagement from "../../Assets/635ba41f1619b03ab3c084173a7e0e9e.jpg";


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
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coursemanagement}
              isBlog={false}
              title="Course Management"
              description="A robust online course reservation platform developed with Laravel, Blade, and AJAX. This application provides a seamless experience for users to browse, schedule, and reserve courses with ease. The platform ensures secure and efficient transactions, allowing users to manage their course enrollments in real-time. With an intuitive interface and responsive design, it caters to both students and administrators, making course management straightforward and effective."
              ghLink="https://github.com/hissoune/Cources-management"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cinemaManager}
              isBlog={false}
              title="Cinema manager restApi"
              description="A powerful REST API designed for a cinema management platform that allows users to discover, reserve, and generate tickets for various events. Organizers can create and manage their own events seamlessly through this API. With features such as user authentication, event scheduling, and ticket generation, this platform provides a comprehensive solution for both users and event organizers, ensuring a smooth and efficient experience."
              ghLink="https://github.com/hissoune/CinemaGestion.git"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cinemaManager}
              isBlog={false}
              title="Cinema Manager Front"
              description="A dynamic frontend application for cinema management developed with React.js and Redux for state management. This platform allows users to stream videos and make reservations seamlessly. With a user-friendly interface and responsive design, it enhances the overall user experience, enabling efficient browsing and booking of cinema events."
              ghLink="https://github.com/hissoune/CinemaManagerV3_front.git"
              // demoLink="https://blogs.soumya-jit.tech/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
