import * as React from 'react';
import { useState } from 'react';
import { useNavigate, NavLink } from "react-router-dom";
import './ResponsiveAppBar.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useAuth } from '../Hooks/Auth';
import Col from 'react-bootstrap/Col';


const pages = ["About", "Menu", "Gallery", "Local Farmers", "Contact"];

function ResponsiveAppBar() {
  const navigate = useNavigate()
  const auth = useAuth();
  const [showNavbar, setShowNavbar] = useState(false)
  // console.log(auth)

  const changePage = (page) => {
    const convertedPage = page.toLowerCase().replaceAll(' ', '')
    navigate(`/${convertedPage}`)
  }

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">

        <Container fluid>
            <Row>
              <Col>
                <img src='https://50eastwv.com/wp-content/uploads/2021/06/50-east-logo-2-768x461.png' id='logo'></img>
              </Col>
              <Col className='menu-icon' onClick={handleShowNavbar}>
                <div id='hamburger'>
                  <div id='bar1'></div>
                  <div id='bar2'></div>
                  <div id='bar3'></div>
                </div>
              </Col>
              <Col>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                  <ul>
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                      <NavLink to="/menu">Menu</NavLink>
                    </li>
                    <li>
                      <NavLink to="/gallery">Gallery</NavLink>
                    </li>
                    <li>
                      <NavLink to="/localfarmers">Local Farmers</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">Contact</NavLink>
                    </li>
                    {auth.userToken && <li>
                                          <NavLink to='/admin'>Admin</NavLink>
                                        </li>}

                    {auth.userToken && <li>
                                          <NavLink to='/' onClick={() => auth.logout()}>Logout</NavLink>
                                        </li>}
                  </ul>
                </div>
              </Col>
            </Row>
        </Container>  
      </div>
    </nav>
  );
}
export default ResponsiveAppBar;