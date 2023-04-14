import React from 'react'
import './Footer.css'
import {Container, Row, Col } from "react-bootstrap";
import Typewriter from 'typewriter-effect';



function Footer() {
  return (
    <div className='Footer'>

      <Container className='cont'>
        <Row>
          <Col md={12}>
          <Typewriter
              options={{
                strings: ('THANKYOU FOR VISITING OUR WEBSITE'),
                autoStart: true,
                loop: true,
              }}
            />
  
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer