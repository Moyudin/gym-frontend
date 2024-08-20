import React from "react";
import AvocadoImg from "../images/diet5.jpg"
import ChickenImg from "../images/diet4.jpg"
import { Col, Container, Image, Row } from "react-bootstrap";

const Diet = () => {
  return (
    <>
      <section id="diet" className="py-5">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2>
              <span>D</span>iet Plans
            </h2>
            <h6>
              Explore our balanced diet plans that complement your fitness regimen and promote overall health.
            </h6>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={6} className="d-flex flex-column justify-content-center">
            <h3>Avocado</h3>
            <p>
              Avocado is a nutrient-dense fruit packed with healthy fats, fiber, and essential vitamins. It supports heart health and provides long-lasting energy, making it a perfect addition to any meal. Its creamy texture and mild flavor make it a versatile ingredient in salads, smoothies, or as a standalone snack.
            </p>
          </Col>
          <Col md={4} className="offset-md-1">
            <Image src={AvocadoImg} alt="Avocado" className="img-fluid" />
          </Col>
        </Row>
        <Row>
          <Col md={6} className="offset-md-1 order-md-2 d-flex flex-column justify-content-center">
            <h3>Grilled Chicken</h3>
            <p>
              Grilled chicken is a lean source of protein, essential for muscle repair and growth. It's low in fat and calories, making it an ideal choice for those looking to build muscle or maintain a healthy weight. Pair it with a variety of vegetables or whole grains for a balanced, nutritious meal.
            </p>
          </Col>
          <Col md={5} className="order-md-1">
            <Image src={ChickenImg} alt="Grilled Chicken" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
    <hr/>
    </>
  );
};

export default Diet;
