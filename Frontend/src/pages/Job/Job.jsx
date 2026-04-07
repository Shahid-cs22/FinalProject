import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Job = () => {
  return (
    <div className="main-div" style={{ paddingTop: "10%", margin: "0 200px" }}>
      <Row>
        <Col lg={4}>
          <div className="sub1" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ratione error quisquam sunt dolores saepe quibusdam dolor perferendis nesciunt expedita.</div>
        </Col>
        <Col lg={8}>
          <div className="sub2"><h4>Title</h4><br /><h5>subTitle</h5></div>
          <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, nostrum?</div>
          <button>view all</button>
        </Col>
      </Row>
    </div>
  )
}

export default Job 