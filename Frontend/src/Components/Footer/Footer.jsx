import React from 'react'
import "./Footer.css"
import img1 from "../../assets/images/Home/cp1.webp"
import { Col, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <>
            <div className="mainblock">

                <Row className='justify-content-center align-center mainblock1 '>
                    <Col lg={2} className='content1'>
                        <h3 className='footercol1'>Follow US</h3>
                        <p className='footercol2'>Job<span className='footer-span'>Leo</span></p>
                    </Col>

                    <Col lg={2} className='content1'>
                        <h3 className='footercol1'>Company</h3>
                        <p>About us</p>
                        <p>Privacy Policy</p>
                        <p>Terms of use</p>
                        <p>Contact us</p>
                    </Col>

                    <Col lg={2} className='content1'>
                        <h3 className='footercol1'>For Candicate</h3>
                        <p >Create Resume</p>
                    </Col>

                    <Col lg={2} className='content1'>
                        <h3 className='footercol1'>For Employee</h3>
                        <p>Post a Job</p>
                    </Col>

                    <Col lg={2} className='content1'>
                        <h3 className='footercol1'>HelpFull Resource</h3>
                        <p>Site Map</p>
                        <p>Security Advisor</p>
                        <p>Fraud Alert</p>
                    </Col>

                    <Col lg={2} className='content1'>
                        <h3 className='footercol1'>Our Product</h3>
                       <div className="images">
                        <img src={img1} alt="" /> <br /><br />
                        <img src={img1} alt="" /><br /><br />
                        <img src={img1} alt="" />
                       </div>
                    </Col>



                </Row>






            </div>


        </>
    )
}

export default Footer