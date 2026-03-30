import React, { useRef } from "react";
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

    const categories = [
        { name: "Freshers", jobs: "23,525 Jobs", icon: "🎓", link: "/jobs/freshers" },
        { name: "IT", jobs: "72,103 Jobs", icon: "💻", link: "/jobs/it" },
        { name: "Sales & Marketing", jobs: "27,435 Jobs", icon: "📈", link: "https://github.com/Shahid-cs22" },
        { name: "Operations", jobs: "13,373 Jobs", icon: "⚙️", link: "/jobs/operations" },
        { name: "Manufacturing", jobs: "4,290 Jobs", icon: "🏭", link: "/jobs/manufacturing" }
    ];

    // const companyDetails = [
    //     {logo :cp1, name:"cp1", link:"https://company1.com"},
    //     {logo :cp2, name:"cp2", link:"https://company2.com"},
    //     {logo :cp3, name:"cp3", link:"https://company3.com"},
    //     {logo :cp4, name:"cp4", link:"https://company4.com"}
    // ]
    

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

{/*             
            <div className="category-wrapperr">
                <div>
                    {companyDetails.map((item, index) => (

                        <a href={item.link} className="category-link" key={index}>
                            <div className="category-card">
                                <div className="icon">{item.icon}</div>
                                <div>
                                    <h6>{item.name}</h6>

                                  
                                </div>
                            </div>
                        </a>

                        
                       

                    ))}
                </div>
            </div> */}


            <div className="companyHiring">
                <h2 className="companyTitle">Top Companies Hiring Now</h2>
                <Row className="align-items-center">
                    <Col lg={3} sm={6} className="text-center ">
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