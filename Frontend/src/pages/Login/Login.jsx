import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import girlImage from "../../assets/signup-im.webp";

const Login = () => {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  // ✅ Check login state on load
  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    if (status === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const validate = () => {
    if (!mobile) return "Mobile number is required";
    if (!/^\d{10}$/.test(mobile)) return "Enter valid 10-digit number";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const err = validate();

    if (err) {
      setError(err);
    } else {
      setError("");

      // ✅ Save login state
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);

      navigate("/");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setMobile("");
  };

  return (
    <Container fluid className="login-container">
      <Row className="min-vh-100">

        {/* LEFT */}
        <Col xs={12} md={6} className="left-section text-center text-md-start">
          <div className="left-content">
            <h1 className="fw-bold">
              Start your career <br /> journey with us
            </h1>

            <p className="text-muted">
              Find jobs worldwide that match your profile:
              Faster, simpler, and easier.
            </p>

            <img src={girlImage} alt="girl" className="hero-img" />
          </div>
        </Col>

        {/* RIGHT */}
        <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
          <div className="login-box">
            <h4 className="fw-bold mb-4 text-center">
              {isLoggedIn ? "Welcome Back!" : "Login to your account!"}
            </h4>

            {!isLoggedIn ? (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Mobile Number <span className="text-danger">*</span>
                  </Form.Label>

                  <Form.Control
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="input-field"
                  />

                  {error && (
                    <small className="text-danger">{error}</small>
                  )}
                </Form.Group>

                <Button type="submit" className="login-btn w-100">
                  Login
                </Button>
              </Form>
            ) : (
              <Button
                onClick={handleLogout}
                className="login-btn w-100 bg-danger"
              >
                Logout
              </Button>
            )}

            <p className="text-center mt-3">
              {!isLoggedIn ? (
                <>
                  Don't have account?{" "}
                  <span className="text-danger fw-bold">Register</span>
                </>
              ) : (
                "You are logged in"
              )}
            </p>
          </div>
        </Col>

      </Row>
    </Container>
  );
};

export default Login;