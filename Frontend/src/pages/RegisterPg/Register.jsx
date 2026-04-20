import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "./Register.css"
import img1 from "../../assets/images/timesjob.svg"
import img2 from "../../assets/signup-im.webp"
const Register = () => {
    return (
        <>
            {/* <div className="pt-5">
                <div>Register</div>
                <div>Register</div>
                <div>Register</div>
                <div>Register</div>
                <div>Register</div>
                <div>Register</div>
                <div>Register</div>
                <div>Register</div>

            </div> */}

            <Row className='main-div' style={{ paddingTop: "70px" }}>
                <div className="registerPage">
                    <Col md={6} lg={4} className=''>
                        <div className="image">  <img src={img1} alt="" /></div>
                        <h3 className="para">Start your career <br /> journey with us </h3>
                        <div className="para">Find jobs worldwide that match your
                            profile: Faster, simpler, and easier.</div>

                        <div className="main-img">
                            <img src={img2} alt="" />
                        </div>
                    </Col>
                    <Col md={6} lg={8}>

                        <h2>Sign Up Today to Start Your Job Search!</h2>

                        <div className="form">
                            <label htmlFor="">Full Name</label> <br />
                            <input type="text" name="inpName" id="" /> <br />

                            <label htmlFor="">Gmail</label> <br />
                            <input type="text" name="inpName" id="" /> <br />

                            <label htmlFor="">Phone number</label> <br />
                            <input type="number" name="inpName" id="" /> <br />

                            <input type="button" value="Register" />
                        </div>
                        By clicking on Continue, you agree to the Terms and Conditions & Privacy Policy of TimesJobs.com


                        Already have account? Login

                    </Col>
                </div>
            </Row>
        </>

    )
}

export default Register