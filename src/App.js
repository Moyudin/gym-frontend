import React from "react";
import Home from "./Home/home";
import About from "./About/about";
import Workout from "./Workout/workout";
import Trainers from "./Trainers/trainers";
import Diet from "./Diet/diet";
import Contact from "./Contact/contact";
import Footer from "./Footer/footer";
import "font-awesome/css/font-awesome.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from "react-bootstrap";
import './App.css';
// import "App.css"

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="#">FitApex</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#workout">Workout</Nav.Link>
            <Nav.Link href="#trainers">Trainers</Nav.Link>
            <Nav.Link href="#diet">Diet</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Home />
      <About />
<hr/>
      <Workout />
<hr/>
      <Trainers/>
    <Diet />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
