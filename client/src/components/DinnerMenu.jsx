import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DinnerMenu = (props) => {

    const { setMenuToDisplay } = props

    return (
        <>
        <Container fluid id='lunch-menu-body'>
        <div>
        <Row className='justify-content-center text-center m-2'>
            <Col>
            <h1 
                id='switch-to-dinner'
                onClick={(e) => {
                    setMenuToDisplay('lunch')
                }}
            >Click Here To See The Lunch Menu</h1>
            </Col>
        </Row>
        </div>
        <div id='apps-div'>
        <Row className='justify-content-center text-center m-3'>
            <h1 id='app-header'>Crafted Salads & Starters</h1>
            
        </Row>
        </div>
        <div id='sandwiches-and-pies-div' className='m-3'>
        <Row className='justify-content-center text-center m-3'>
            <h1 id='sandwiches-and-pies-header'>Sandwiches & Pies</h1>
            
        </Row>
        </div>
        <div id='bowls-div' className='m-3'>
        <Row className='justify-content-center text-center m-3'>
            <h1 id='bowls-header'>Bowls</h1>
            
        </Row>
        </div>
    </Container>
        </>
    )
}

export default DinnerMenu