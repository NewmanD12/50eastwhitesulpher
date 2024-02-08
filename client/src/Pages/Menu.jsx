import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Menu.css'
import MenuItem from '../components/MenuItem';

const Menu = (props) => {

  const { menuItems } = props

  // const [apps, setApps] = useState([])

  const apps = menuItems.filter((item) => {
                  return item.course === 'appetizer'
                })

  console.log(apps)

  return (

    <>
        <Container fluid id='menu-body'>
          <div id='apps-div'>
            <Row className='justify-content-center text-center'>
              <h1 id='app-header'>Appetizers</h1>
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