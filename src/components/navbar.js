import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <div>
      <Navbar bg="light" className= "fixed-top" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Monkey News</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
            </Nav>
            <Nav className="me-auto" >
              <li className="nav-item"> <Link className="nav-link" to="/general"> General </Link></li>
              <li className="nav-item"> <Link className="nav-link" to="/business"> Business </Link></li>
              <li className="nav-item"> <Link className="nav-link" to="/entertainment"> Entertainment </Link></li>
              <li className="nav-item"> <Link className="nav-link" to="/health"> Health </Link></li>
              <li className="nav-item"> <Link className="nav-link" to="/science"> Science </Link></li>
              <li className="nav-item"> <Link className="nav-link" to="/sports"> Sports </Link></li>
              <li className="nav-item"> <Link className="nav-link" to="/technology"> Technology</Link></li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
