import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Menu.css'
import MenuItem from '../components/MenuItem';

const Menu = (props) => {
  
  const { menuItems } = props
  const apps = []


  // const apps = menuItems.filter((item) => {
  //                 return item.courseAndPrice.course === 'saladsAndStarters'
  //               })

  const starters = menuItems.map((item, index) => {
    console.log(item.courseAndPrice.length)
    if(item.courseAndPrice.length > 1){
      console.log('longer than 2')
    }
    else {
      if(item.courseAndPrice[0].course === 'saladsAndStarters'){
        apps.push(item)
      }
    }
  })

  console.log(apps)

  // console.log(starters)

  // console.log(menuItems[0].courseAndPrice)

  // console.log()

    

  return (

    <>
        <Container fluid id='menu-body'>
          <div id='apps-div'>
            <Row className='justify-content-center text-center'>
              <h1 id='app-header'>Crafted Salads & Starters</h1>
              {apps.map((app, index) => {
                return <Col md={6} key={index} className='text-center'>
                          <MenuItem item={app}/>
                        </Col>
              })}
            </Row>
          </div>
        </Container>
    </>
  )
}

export default Menu