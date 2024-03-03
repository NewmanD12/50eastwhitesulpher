import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import './Gallery.css'


const Gallery = () => {

  const imgNames = ['garlicShot', 'fire', 'basil', 'jqSalt', 'upperJQSalt', 'finishingTouches', 'drippy', 'plating']

  return (
    <>
        <Container fluid>
          <Row className='justify-content-center'>
            {imgNames.map((name, index) => {
                return <Col lg={4} className='mt-3' key={index}>
                          <img src={`${name}.jpg`} className='gallery-imgs'/>
                        </Col>
            })}
          </Row>
        </Container>
    </>
  )
}

export default Gallery