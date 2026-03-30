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

function Header() {
  return (
    <div className="nav-wrapper position-fixed w-100 opacity-1">
      <Navbar expand="lg" className="custom-navbar ">
        <Container>

          {/* Logo */}
          <Navbar.Brand className="logo">
            JOB<span>LIO</span>
          </Navbar.Brand>

          {/* Toggle */}
          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">

            {/* Left Menu */}
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
                      <NavDropdown.Item>IT Software Jobs</NavDropdown.Item>
                      <NavDropdown.Item>BPO Jobs</NavDropdown.Item>
                      <NavDropdown.Item>Sales Jobs</NavDropdown.Item>
                      <NavDropdown.Item>Fresher Jobs</NavDropdown.Item>
                    </Col>

                    <Col xs={12} md={6} lg={4}>
                      <h6>Jobs by Role</h6>
                      <NavDropdown.Item>Java Developer</NavDropdown.Item>
                      <NavDropdown.Item>Content Writer</NavDropdown.Item>
                      <NavDropdown.Item>HR Manager</NavDropdown.Item>
                    </Col>

                    <Col xs={12} md={6} lg={4}>
                      <h6>Jobs by Location</h6>
                      <NavDropdown.Item>Chennai</NavDropdown.Item>
                      <NavDropdown.Item>Bangalore</NavDropdown.Item>
                      <NavDropdown.Item>Mumbai</NavDropdown.Item>
                    </Col>

                  </Row>
                </div>
              </NavDropdown>

              <Nav.Link className="restit">Resume</Nav.Link>
               <Nav.Link  className="restit">Service</Nav.Link>
              <Nav.Link  className="restit">Stories</Nav.Link>

            </Nav>

            {/* Right Menu */}
            <Nav className="ms-auto align-items-center gap-3">
              <Nav.Link className="profile-link">Profile</Nav.Link>
              <Button className="logout-btn ">Logout</Button>
              <Button className="logout-btn">Register</Button>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;