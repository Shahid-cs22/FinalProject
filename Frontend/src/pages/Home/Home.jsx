import React, { useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Home.css";
import img1 from "../../assets/images/home1.png"
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import img3 from "../../assets/images/Home/cp1.webp"
import img4 from "../../assets/images/Home/cp2.webp"
import img5 from "../../assets/images/Home/cp3.webp"
import img6 from "../../assets/images/Home/cp4.webp"
import img7 from "../../assets/images/Home/cp5.webp"
import img8 from "../../assets/images/Home/cp6.webp"
import img9 from "../../assets/images/Home/cp7.webp"
import img10 from "../../assets/images/Home/cp8.webp"
import img11 from "../../assets/images/Home/cp9.webp"
import count1 from "../../assets/images/Home/country1.svg"
import count2 from "../../assets/images/Home/country2.svg"
import count3 from "../../assets/images/Home/country3.svg"
import count4 from "../../assets/images/Home/country4.svg"
import count5 from "../../assets/images/Home/country5.svg"
import count6 from "../../assets/images/Home/country6.svg"
import count7 from "../../assets/images/Home/country7.svg"
import count8 from "../../assets/images/Home/country8.svg"
import data1 from "../../assets/images/Home/big.webp"
import data2 from "../../assets/images/Home/big2.webp"
import job from "../../assets/images/Home/seekers.webp"
import req1 from "../../assets/images/Home/require1.png"
import req2 from "../../assets/images/Home/require2.png"
import req3 from "../../assets/images/Home/require3.png"
import req4 from "../../assets/images/Home/require4.png"

function Home() {

    const categories = [
        { name: "Freshers", jobs: "23,525 Jobs", icon: "🎓", link: "/jobs/freshers" },
        { name: "IT", jobs: "72,103 Jobs", icon: "💻", link: "/jobs/it" },
        { name: "Sales & Marketing", jobs: "27,435 Jobs", icon: "📈", link: "https://github.com/Shahid-cs22" },
        { name: "Operations", jobs: "13,373 Jobs", icon: "⚙️", link: "/jobs/operations" },
        { name: "Manufacturing", jobs: "4,290 Jobs", icon: "🏭", link: "/jobs/manufacturing" }
    ];

    const companyData = [
        { img: img3 },
        { img: img4 },
        { img: img5 },
        { img: img6 },
        { img: img7 },
        { img: img8 },
        { img: img9 },
        { img: img10 },
        { img: img11 }
    ];

    const countryData = [
        { img: count1, name: "Mumbai", link: "/jobs/dev" },
        { img: count2, name: "Delhi", link: "/jobs/freshers" },
        { img: count3, name: "Bangalore", link: "/jobs/freshers" },
        { img: count4, name: "Hyderabad", link: "/jobs/freshers" },
        { img: count5, name: "Chennai", link: "/jobs/freshers" },
        { img: count6, name: "Pune", link: "/jobs/freshers" },
        { img: count7, name: "Kolkata", link: "/jobs/freshers" },
        { img: count8, name: "Ahmedabad", link: "/jobs/freshers" }
    ]




    const scrollRef = useRef();
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

            <div className="category-wrapperr">
                <div className="category-scroll" ref={scrollRef}>
                    {categories.map((item, index) => (

                        <a href={item.link} className="category-link" key={index}>
                            <div className="category-card">
                                <div className="icon">{item.icon}</div>
                                <div>
                                    <h6>{item.name}</h6>
                                    <p>{item.jobs}</p>
                                </div>
                            </div>
                        </a>

                    ))}

                </div>

            </div>
            <div className="image-picture ">
                <Container>
                    <div className="laptop-screen ">  <img src={data1} alt="" className="img-fluid" /></div>
                    <div className="mobile-screen"><img src={data2} alt="" className="img-fluid" /></div>
                </Container>
            </div>


            <div className="logo-section">
                <Container>
                    <p className="text-center companytext" >Top Companies Hiring Now</p>
                    <Row className="rowwise justify-content-center ">
                        {companyData.map((company, index) => (

                            <Col
                                key={index} xs={4} sm={4} md={3} lg={2} className="mb-4 d-flex justify-content-center">
                                <div className="logo-box">
                                    <img src={company.img} alt={company.name} />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

            <div className="city-section">
                <Container>
                    <p className="citytext text-center">
                        Top Consultants in Your City
                    </p>

                    <Row className="justify-content-center">

                        {countryData.map((country, index) => (

                            <Col
                                key={index} xs={4} sm={4} md={3} lg={2}
                                className="mb-4 d-flex justify-content-center"
                            >
                                <a href={country.link} className="category-link">
                                    <div className="city-box text-center ">
                                        <img src={country.img} alt={country.name} className="city-img" />
                                        <p className="justify-content-center">{country.name}</p>
                                    </div>
                                </a>
                            </Col>
                        ))}
                    </Row>

                    <Button className="view-all-btn justify-content-center">view all</Button>

                </Container>
            </div >

            <div className="top-requirements text-center pt-4">
                <p className="requires">
                    <span className="requires-text">Top Recruiters</span>  <br />
                    Top Talent Seekers
                </p>

                <Row className="justify-content-center">
                    <Col xs={6} sm={4} md={3} lg={6} className="mb-4 d-flex justify-content-center">
                        <div className="require-image">
                            <img src={job} alt="" />
                        </div>
                    </Col>


                    <Col lg={2}>
                        <div className="jobimage">
                            <img src={req1} alt="" />
                            <p>Amazon <span>188 Jobs</span></p>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="jobimage">
                            <img src={req2} alt="" />
                            <p>Adobe <span>57 Jobs</span></p>
                        </div></Col>
                    <Col lg={2}>
                        <div className="jobimage">
                            <img src={req3} alt="" />
                            <p>nVida <span>188 Jobs</span></p>
                        </div>
                    </Col>






                </Row >

            </div >


        </>
    );
}

export default Home;