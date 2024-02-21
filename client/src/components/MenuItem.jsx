import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './MenuItem.css'

const MenuItem = (props) => {

    const { item } = props

    const mealPeriodAndPrices = item.mealPeriodAndPrices
    const lunchPriceFound = mealPeriodAndPrices.filter((item) => {
        return item.course === 'lunch'
    })
    const price = lunchPriceFound[0].price

    const subs = item.subsAndUpcharges.filter((sub) => {
        return sub.title
    })

    let subsBeginning = []
    let lastSub = {}
    let subsList = ''

    if(subs.length > 1){
        subsBeginning = subs.slice(0, subs.length-1)
        lastSub = subs[subs.length - 1]
        subsList = ``
    }
    
    console.log(subsBeginning)
    console.log(lastSub)
   

    return (
        <Container fluid id='individual-menu-items'>
            <Row className='justify-content-center'>
                <Col id='menu-item-title' xs={8}>{item.title}</Col>
                <Col id='menu-item-price'>${price}</Col>
            </Row>
            <Row>
                <Col>
                    <p id='menu-item-desc'>{item.description}</p>
                </Col>
            </Row>
            <Row className='justify-content-center text-center'>
                <Col>
                    <p></p>
                </Col>
            </Row>
        </Container>
    )
}

export default MenuItem