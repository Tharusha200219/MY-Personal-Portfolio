import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/p1.jpg";
import projImg2 from "../assets/img/p2.png";
import projImg3 from "../assets/img/p3.jpg";
import projImg4 from "../assets/img/p4.png";
import projImg5 from "../assets/img/p5.png";
import projImg6 from "../assets/img/p6.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "PET CARE AND ADOPTION MOBILE APP",
      description: "Welcome to Pet Care and Adaptation mobile application! this app developed using Android Studio, users can seamlessly manage their pet's needs, track health records, and connect with local shelters for adoption.",
      imgUrl: projImg1,
      link: "https://github.com/Tharusha200219/TEA_FACTORY_MANAGEMENT_SYSTEM_Year_2_Semester_2_Project.git"
    },
    {
      title: "Task Management Application",
      description: "TaskVault is a sleek and efficient task management app designed to streamline your productivity. With intuitive features like task creation, updating, and deletion, along with date, TaskVault keeps your tasks organized and on track. Utilizing SQLite and Room database technology, TaskVault ensures your data is secure and synchronized across devices",
      imgUrl: projImg2,
      link: "https://github.com/Tharusha200219/TEA_FACTORY_MANAGEMENT_SYSTEM_Year_2_Semester_2_Project.git"
    },
    {
      title: "TEA FACTORY MANAGEMENT SYSTEM",
      description: "Our Tea Factory Management project aims to revolutionize the way tea manufacturing facilities operate by leveraging the power of modern technology. Using the MERN stack (MongoDB, Express.js, React, Node.js)",
      imgUrl: projImg3,
      link: "https://github.com/Tharusha200219/TEA_FACTORY_MANAGEMENT_SYSTEM_Year_2_Semester_2_Project.git"
    },
    {
      title: "VEHICLE_RENTAL_SERVICE",
      description: "Our Year 2 Semester 1 project is a Java-based vehicle rental service, facilitating easy vehicle bookings. Users can select preferred vehicles, manage bookings. With intuitive interfaces and robust backend functionality, our platform offers a reliable solution for both renters and administrators.",
      imgUrl: projImg4,
      link: "https://github.com/Tharusha200219/TEA_FACTORY_MANAGEMENT_SYSTEM_Year_2_Semester_2_Project.git"
    },
    {
      title: "ONLINE BOOKSTORE",
      description: "The Online Book Store project is a comprehensive web application designed to simulate an e-commerce platform for purchasing books. This project leverages the power of HTML, CSS, PHP, and XML to create a user-friendly, dynamic, and interactive online shopping experience.",
      imgUrl: projImg5,
      link: "https://github.com/Tharusha200219/TEA_FACTORY_MANAGEMENT_SYSTEM_Year_2_Semester_2_Project.git"
    },
    {
      title: "FLYING MONKEY MOBILE GAME ANDROID",
      description: "Flying Monkey is an exciting mobile game where players control a monkey aiming to catch colored balls. The objective is to gather yellow and green balls for points while avoiding red balls, which deduct from the monkey's three lives. With vibrant visuals and simple controls",
      imgUrl: projImg6,
      link: "https://github.com/Tharusha200219/TEA_FACTORY_MANAGEMENT_SYSTEM_Year_2_Semester_2_Project.git"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>My projects span various IT fields, including web development using modern frameworks, Android app development with user-friendly interfaces, and innovative software solutions to meet diverse business needs.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  )
}
