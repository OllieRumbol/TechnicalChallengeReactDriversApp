import React from "react";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import Row from "react-bootstrap/esm/Row";
import HomePage from "./home/HomePage";
import DriversPage from "./drivers/DriversPage";
import VehiclePage from "./vehicles/VehiclePage";
import AboutPage from "./about/AboutPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/App.css";
import Navbar from "react-bootstrap/esm/Navbar";

export default function App() {
  return (
    <Router>
      <Container fluid>
      <Navbar bg="light" expand="lg">
        BIG bar
      </Navbar>
        <Row>
          <Col xs={2}>
            <Nav className="col-md-12 d-none d-md-block bg-light">
              <Link to="/home">
                <Nav.Item>Home</Nav.Item>
              </Link>
              <Link to="/drivers">
                <Nav.Item>Drivers</Nav.Item>
              </Link>
              <Link to="/vehicles">
                <Nav.Item>Vehicles</Nav.Item>
              </Link>
              <Link to="/about">
                <Nav.Item>About</Nav.Item>
              </Link>
            </Nav>
          </Col>
          <Col>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/drivers" element={<DriversPage />} />
              <Route path="/vehicles" element={<VehiclePage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}