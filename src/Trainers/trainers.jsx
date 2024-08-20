import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import trainer from "../images/trainer.jpg";
import trainer2 from "../images/trainer2.jpg";
import trainer3 from "../images/trainer3.jpg";
import trainer4 from "../images/trainer4.jpg";

const Trainers = () => {
  const trainers = [
    { img: trainer, name: "Someone Famous" },
    { img: trainer2, name: "Someone Famous" },
    { img: trainer3, name: "Someone Famous" },
    { img: trainer4, name: "Someone Famous" },
  ];

  return (
    <section id="trainers" className="py-5">
      <Container>
        {/* Main Header */}
        <Row className="text-center mb-4">
          <Col>
            <h2>
              <span>B</span>est <span>T</span>rainers
            </h2>
            <h6>
              We offer a variety of workout programs designed to help you achieve your fitness goals, whether you're just starting your journey or you're a seasoned athlete. Explore our offerings and find the perfect fit for your lifestyle.
            </h6>
          </Col>
        </Row>

        {/* Trainers Cards */}
        <Row>
          {trainers.map((trainer, index) => (
            <Col md={6} lg={3} className="mb-4" key={index}>
              <Card className="d-flex flex-column h-100">
                <Card.Img variant="top" src={trainer.img} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="mt-auto">{trainer.name}</Card.Title>
                  <Card.Text>Fitness Redefined Unleash the Athlete in You</Card.Text>
                  {/* <Button variant="primary" href="#">Explore</Button> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Trainers;
