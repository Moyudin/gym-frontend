import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Workout1 from "../images/workout1.jpg";
import Workout2 from "../images/workout2.jpg";
import Workout3 from "../images/workout3.jpg";

const Workout = () => {
  return (
    <section id="workout" className="py-5">
      <Container>
        {/* Main Header */}
        <Row className="text-center mb-4">
          <Col>
            <h2>
              <span>W</span>orkouts
            </h2>
            <h6>
              Discover our range of workout plans designed to suit all fitness levels and goals.
            </h6>
          </Col>
        </Row>

        {/* Workout Cards */}
        <Row>
          <Col md={4} className="mb-4">
            <Card className="d-flex flex-column h-100">
              <Card.Img variant="top" src={Workout1} />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="mt-auto">Cardio Blast</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="d-flex flex-column h-100">
              <Card.Img variant="top" src={Workout2} />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="mt-auto">Strength Training</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="d-flex flex-column h-100">
              <Card.Img variant="top" src={Workout3} />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="mt-auto">Yoga & Flexibility</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Workout;
