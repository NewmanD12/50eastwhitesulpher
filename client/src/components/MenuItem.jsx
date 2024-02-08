import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MenuItem = (item) => {

    console.log(item.item)

    // const abvAllergyWarnings = item.app.allergyWarnings.map((allergy) => {
    //     return allergy[0]
    // })

    // console.log(abvAllergyWarnings)


    return (
        <Container id='individual-menu-items'>
            <Row className='justify-content-center'>
                <Col id='menu-item-title'>{item.item.title}</Col>
                <Col id='menu-item-price'>${item.item.price}</Col>
            </Row>
            <Row>
                <Col>
                    <p id='menu-item-desc'>{item.item.description}</p>
                </Col>
            </Row>
            <Row>
                
            </Row>
        </Container>
    )
}

export default MenuItem