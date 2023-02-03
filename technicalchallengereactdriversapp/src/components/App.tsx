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
import Logo from "../assets/logo.png";
import { Button, ButtonGroup } from "react-bootstrap";

export default function App() {
  return (
    <Router>
      <Container fluid>
        <Navbar>
          <Navbar.Brand className="m-2">
            <img src={Logo} width="10%" height="10%" alt="Logistics UKLogo" />
          </Navbar.Brand>
        </Navbar>
        <Row>
          <Col xs={2}>
            <Nav className="col-md-12 d-none d-md-block">
              <Link to="/home">
                <Nav.Item>
                  <ButtonGroup className="m-2">
                    <Button>Home</Button>
                  </ButtonGroup>
                </Nav.Item>
              </Link>
              <Link to="/drivers">
                <Nav.Item>
                  <ButtonGroup className="m-2">
                    <Button>Driver</Button>
                  </ButtonGroup>
                </Nav.Item>
              </Link>
              <Link to="/vehicles">
                <Nav.Item>
                  <ButtonGroup className="m-2">
                    <Button>Vehicles</Button>
                  </ButtonGroup>
                </Nav.Item>
              </Link>
              <Link to="/about">
                <Nav.Item>
                  <ButtonGroup className="m-2">
                    <Button>About</Button>
                  </ButtonGroup>
                </Nav.Item>
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
