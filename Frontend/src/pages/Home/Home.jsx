import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Home.css";
import img1 from "../../assets/images/home1.png"
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import img2 from "../../assets/images/tj_rsgl1.webp"
import img3 from "../../assets/images/Home/cp1.webp"
import img4 from "../../assets/images/Home/cp2.webp"
import img5 from "../../assets/images/Home/cp3.webp"
import img6 from "../../assets/images/Home/cp4.webp"

function Home() {
    return (
        <>
            <div className="hero-section">
                <Container>
                    <Row className="align-items-center">


                        <Col lg={8}>
                            <h1 className="hero-title">
                                Get the Right Job <span>Simpler</span>
                            </h1>


                            <div className="search-wrapper">


                                <Form className="search-desktop d-none d-md-flex">
                                    <Form.Control
                                        placeholder="Enter Skills, Designation, etc"
                                        className="input-desktop"
                                    />

                                    <Form.Select className="input-desktop">
                                        <option>Select Experience</option>
                                        <option>Fresher</option>
                                        <option>2 Years</option>
                                        <option>3 Years</option>
                                        <option>4 Years</option>
                                        <option>5 Years</option>
                                        <option>6 Years</option>
                                        <option>7 Years</option>
                                        <option>8 Years</option>
                                        <option>9 Years</option>
                                        <option>10 Years</option>

                                    </Form.Select>

                                    <Form.Control
                                        placeholder="Enter locations"
                                        className="input-desktop"
                                    />

                                    <input type="button" className="btn-search" value="Let's Find" />
                                </Form>


                                <Form className="search-mobile d-md-none">
                                    <Form.Control
                                        placeholder="Enter Skills, Designation, etc"
                                        className="input-mobile"
                                    />

                                    <Form.Select className="input-mobile">
                                        <option>Select Experience</option>
                                        <option>Fresher</option>
                                    </Form.Select>

                                    <Form.Control
                                        placeholder="Enter locations"
                                        className="input-mobile"
                                    />

                                    <Button className="btn-search w-100">
                                        Let's Find
                                    </Button>
                                </Form>

                            </div>
                        </Col>

                        <Col lg={4} className="text-center image">
                            <img
                                src={img1}
                                alt="hero"
                                className="hero-img"
                            />
                        </Col>

                    </Row>
                </Container>
            </div>

            <div className="boxPage">

                <Row className="">
                    <Col lg={3} sm={3} className="text-center">
                        <div className="textBox">
                            <SchoolOutlinedIcon />   Fresher
                        </div>
                        <div className="vacancy">
                            1000+ Vacancies
                        </div>

                    </Col>
                    <Col lg={3} sm={3} className="text-center">
                        <div className="textBox">
                            <SchoolOutlinedIcon />   Fresher
                        </div>
                        <div className="vacancy">
                            1000+ Vacancies
                        </div>

                    </Col>
                    <Col lg={3} sm={3} className="text-center">
                        <div className="textBox">
                            <SchoolOutlinedIcon />   Fresher
                        </div>
                        <div className="vacancy">
                            1000+ Vacancies
                        </div>

                    </Col>
                    <Col lg={3} sm={3} className="text-center">
                        <div className="textBox">
                            <SchoolOutlinedIcon />   Fresher
                        </div>
                        <div className="vacancy">
                            1000+ Vacancies
                        </div>

                    </Col>

                </Row>
                <Row className="mt-4">
                    <Col lg={12} sm={12} className="text-center">
                        <img src={img2} alt="" />
                    </Col>
                </Row>

            </div>

            <div className="companyHiring">
                <h2 className="companyTitle">Top Companies Hiring Now</h2>
                <Row className="align-items-center">
                    <Col lg={3} sm={6} className="text-center">
                    <img src={img3} alt="" />
                    </Col>
                    <Col lg={3} sm={6} className="text-center">
                    <img src={img4} alt="" />
                    </Col>
                    <Col lg={3} sm={6} className="text-center">
                    <img src={img5} alt="" />
                    </Col>
                    <Col lg={3} sm={6} className="text-center">
                    <img src={img6} alt="" />
                    </Col>

                </Row>


            </div>
        </>
    );
}

export default Home;