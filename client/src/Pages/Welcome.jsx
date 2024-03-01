import React from 'react'
import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import './Welcome.css'


const Welcome = () => {

  return (
    <>
      <Container fluid>
        <Row className='justify-content-center'>
          <Col md={6}>
            <img src={'/flamey-drip.jpg'} id='landing-page-image'></img>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Welcome