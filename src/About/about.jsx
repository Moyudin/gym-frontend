import React from "react";
import AboutImg from "../images/about.jpg"
import { Button, Col, Container, Image, Row } from "react-bootstrap";

const About = () => {
  return (
    <>
      <section id="about" className="py-5">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2>
              <span>A</span>bout Us
            </h2>
            <h6>
              We are dedicated to helping you achieve your fitness goals with personalized training and nutrition plans.
            </h6>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="d-flex align-items-center">
            <Image src={AboutImg} alt="About Us" fluid />
          </Col>
          <Col md={6}>
            <h3 className="text-center">Our Mission</h3>
            <p>
              To provide top-notch fitness training and nutrition guidance to help you live a healthier, happier life.
            </p>
            <p>
              Join us and experience the difference in your fitness journey.
            </p>
            {/* <Button variant="primary">Learn more</Button> */}
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
};

export default About;
