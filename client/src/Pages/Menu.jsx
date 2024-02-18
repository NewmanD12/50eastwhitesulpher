import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Menu.css'
import MenuItem from '../components/MenuItem';

const Menu = (props) => {
  
  const { menuItems } = props
  const apps = []



  return (

    <>
        <Container fluid id='menu-body'>
          <div id='apps-div'>
            <Row className='justify-content-center text-center'>
              <h1 id='app-header'>Crafted Salads & Starters</h1>
              
            </Row>
          </div>
        </Container>
    </>
  )
}

export default Menu