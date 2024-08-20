import React from "react";
import { Container } from "react-bootstrap";
import "../App.css"
const Home = () => {
  return (
    <>
      <section
        id="home"
        className="d-flex justify-content-center align-items-center home text-white text-center"
        style={{
          background: "url('images/bgimg.jpg') no-repeat center center/cover",
          height: "100vh"
        }}
      >
        <Container>
          <div>
            <h1 className="display-4">Welcome to Our Gym</h1>
            <p className="lead">Achieve your fitness goals with us</p>
            {/* <Button variant="primary" >Join Us</Button> */}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
