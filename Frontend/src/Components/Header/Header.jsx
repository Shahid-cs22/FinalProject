import React from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Button,
  Row,
  Col
} from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="nav-wrapper position-fixed w-100 opacity-1">
      <Navbar expand="lg" className="custom-navbar">
        <Container>

        
          <Navbar.Brand as={Link} to="/" className="logo">
            JOB<span>LIO</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">

            <Nav className="me-auto nav-links">

              <NavDropdown
                title="Jobs"
                id="jobs-dropdown"
                className="mega-dropdown"
              >
                <div className="mega-menu">
                  <Row>

                    <Col xs={12} md={6} lg={4}>
                      <h6>Jobs by Category</h6>
                      <NavDropdown.Item as={Link} to="/jobs/it-software">IT Software Jobs</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/jobs/bpo">BPO Jobs</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/jobs/sales">Sales Jobs</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/jobs/fresher">Fresher Jobs</NavDropdown.Item>
                    </Col>

                    <Col xs={12} md={6} lg={4}>
                      <h6>Jobs by Role</h6>
                      <NavDropdown.Item as={Link} to="/jobs/java-developer">Java Developer</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/jobs/content-writer">Content Writer</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/jobs/hr-manager">HR Manager</NavDropdown.Item>
                    </Col>

                    <Col xs={12} md={6} lg={4}>
                      <h6>Jobs by Location</h6>
                      <NavDropdown.Item as={Link} to="/jobs/chennai">Chennai</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/jobs/bangalore">Bangalore</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/jobs/mumbai">Mumbai</NavDropdown.Item>
                    </Col>

                  </Row>
                </div>
              </NavDropdown>

              <Nav.Link as={Link} to="/resume" className="restit">Resume</Nav.Link>
              <Nav.Link as={Link} to="/service" className="restit">Service</Nav.Link>
              <Nav.Link as={Link} to="/stories" className="restit">Stories</Nav.Link>

            </Nav>

         
            <Nav className="ms-auto align-items-center gap-3">
              <Nav.Link as={Link} to="/profile" className="profile-link">Profile</Nav.Link>
              <Button as={Link} to="/logout" className="logout-btn">Logout</Button>
              <Button as={Link} to="/register" className="logout-btn">Register</Button>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;