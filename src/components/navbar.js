import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function navbar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Monkey News</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
            </Nav>
            <Nav className="me-auto">
              <Nav.Link to="/general"> General </Nav.Link>
              <Nav.Link to="/business"> Business </Nav.Link>
              <Nav.Link to="/entertainment"> Entertainment </Nav.Link>
              <Nav.Link to="/health"> Health </Nav.Link>
              <Nav.Link to="/science"> Science </Nav.Link>
              <Nav.Link to="/sports"> Sports </Nav.Link>
              <Nav.Link to="/technology"> Technology</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
