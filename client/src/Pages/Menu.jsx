import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Menu = (props) => {

  console.log(props)

  return (

    <>
        <Container fluid='md'>
          <Row className='justify-content-center text-center'>
            <Col>
              <h1>Appetizers</h1>
            </Col>
          </Row>
        </Container>
    </>
  )
}

export default Menu