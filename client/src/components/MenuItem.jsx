import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Pages/Menu.css'


const MenuItem = (props) => {

    const { item, currentMenu } = props

    const mealPeriodAndPrices = item.mealPeriodAndPrices
    const menuPriceFound = mealPeriodAndPrices.filter((item) => {
        return item.mealPeriod === currentMenu
    })

    const price = menuPriceFound[0].price

    const subs = item.subsAndUpcharges.filter((sub) => {
        return sub.title
    })

    const convertSubs = (listOfSubs) => {
        const lengthOfSubs = listOfSubs.length

        let finalSubsAndPrices = ''

        if(lengthOfSubs === 1){
            finalSubsAndPrices = `${listOfSubs[0].title} $${listOfSubs[0].price}`
        }
        else if(lengthOfSubs === 2){
            finalSubsAndPrices = `${listOfSubs[0].title} $${listOfSubs[0].price} | ${listOfSubs[1].title} $${listOfSubs[1].price}`
        }
        else if(lengthOfSubs === 3){
            finalSubsAndPrices = `${listOfSubs[0].title} $${listOfSubs[0].price} | ${listOfSubs[1].title} $${listOfSubs[1].price} | ${listOfSubs[2].title} $${listOfSubs[2].price}`
        }
        else if(lengthOfSubs === 4){
            finalSubsAndPrices = `${listOfSubs[0].title} $${listOfSubs[0].price} | ${listOfSubs[1].title} $${listOfSubs[1].price} | ${listOfSubs[2].title} $${listOfSubs[2].price} | ${listOfSubs[3].title} $${listOfSubs[3].price}`
        }
        else if(lengthOfSubs === 5){
            finalSubsAndPrices = `${listOfSubs[0].title} $${listOfSubs[0].price} | ${listOfSubs[1].title} $${listOfSubs[1].price} | ${listOfSubs[2].title} $${listOfSubs[2].price} | ${listOfSubs[3].title} $${listOfSubs[3].price} | ${listOfSubs[4].title} $${listOfSubs[4].price}`
        }

        return finalSubsAndPrices
    }

    if(subs.length > 0){
        convertSubs(subs)
    }

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
            <Row className='justify-content-center'>
                <Col>
                    <p className='subs'>{convertSubs(subs)}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default MenuItem