import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './About.css'

const About = () => {
  return (
    <>
        <Container fluid>
          <Row className='justify-content-center text-center mt-5'>
            <Col md={6}>
              <img id='aboutLandingPhoto' src='saltingFish.jpg'/>
            </Col>
          </Row>
          <Row className='justify-content-center text-center mt-5'>
            <Col md={6}>
              <h4>Born and raised in Virginia Beach, Chef Stephen Gustard's culinary journey was ignited by the flavors of his childhood home. His mother's resourcefulness in the kitchen instilled in him a deep love for cooking, setting the stage for a remarkable career in the culinary arts.</h4>
            </Col>
          </Row>
          <Row className='justify-content-center align-items-center text-start mt-5'>
            <Col className='mt-5' md={6}>
              <img id='flameyDripAbout' src='flamey-drip.jpg'/>
            </Col>
            <Col id='para1' className='mt-5' md={5}>
              <h4>After mastering his craft in various restaurants across Virginia, Stephen embarked on a culinary odyssey that took him from the bustling kitchens of Florida to the serene hills of West Virginia. It was at the prestigious Greenbrier Resort where he refined his skills under the tutelage of esteemed chefs, solidifying his passion for culinary excellence.</h4>
            </Col>
          </Row>
          <Row id='secondRow' className='justify-content-center align-items-center text-end mt-5'>
            <Col id='para2' className='mt-5' md={5}>
              <h4>Stephen's culinary adventures have now come full circle as he prepares to return to the picturesque town of White Sulphur Springs, nestled near the iconic Greenbrier. With boundless enthusiasm, he eagerly anticipates the opportunity to open his own restaurant in this historic area, where he first fell in love with the charm and hospitality of West Virginia.</h4>
            </Col>
            <Col className='mt-5' md={6}>
              <img id='flameyDripAbout' src='platingSteak.jpg'/>
            </Col>
          </Row>
          
        </Container>
    </>
  )
}

export default About