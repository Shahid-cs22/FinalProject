import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // reuse same css
import girlImage from "../../assets/signup-im.webp";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    whatsapp: true,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    if (!form.name) return "Name is required";
    if (!form.email) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(form.email)) return "Enter valid email";
    if (!form.mobile) return "Mobile number is required";
    if (!/^\d{10}$/.test(form.mobile)) return "Enter valid 10-digit number";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const err = validate();
    if (err) {
      setError(err);
    } else {
      setError("");

      // ✅ Save user (demo)
      localStorage.setItem("user", JSON.stringify(form));

      // ✅ Navigate to login
      navigate("/");
    }
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
        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
          <div className="login-box">
            <h4 className="fw-bold text-center mb-4">
              Sign Up Today to Start Your Job Search!
            </h4>

            <Form onSubmit={handleSubmit}>

              {/* NAME */}
              <Form.Group className="mb-3">
                <Form.Label>Full Name <span className="text-danger">*</span></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
              </Form.Group>

              {/* EMAIL */}
              <Form.Group className="mb-3">
                <Form.Label>Email Id <span className="text-danger">*</span></Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email id"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </Form.Group>

              {/* MOBILE */}
              <Form.Group className="mb-3">
                <Form.Label>Mobile Number <span className="text-danger">*</span></Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your mobile number"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                />
              </Form.Group>

              {/* WHATSAPP TOGGLE */}
              <div className="whatsapp-box d-flex justify-content-between align-items-center mb-3">
                <div>
                  <strong>Stay Updated.</strong>
                  <div className="text-muted small">
                    Receive important alerts via WhatsApp
                  </div>
                </div>

                <Form.Check
                  type="switch"
                  name="whatsapp"
                  checked={form.whatsapp}
                  onChange={handleChange}
                />
              </div>

              {/* ERROR */}
              {error && <small className="text-danger">{error}</small>}

              {/* BUTTON */}
              <Button type="submit" className="login-btn w-100 mt-3">
                Register
              </Button>

            </Form>

            {/* TERMS */}
            <p className="small text-center mt-3">
              By clicking on Continue, you agree to the{" "}
              <span className="text-danger">Terms and Conditions</span> &{" "}
              <span className="text-danger">Privacy Policy</span>
            </p>

            {/* LOGIN LINK */}
            <p className="text-center">
              Already have account?{" "}
              <span
                className="text-danger fw-bold cursor-pointer"
                onClick={() => navigate("/")}
              >
                Login
              </span>
            </p>

          </div>
        </Col>

      </Row>
    </Container>
  );
};

export default Register;