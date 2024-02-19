import * as React from 'react';
import { useState } from 'react';
import { useNavigate, NavLink } from "react-router-dom";
import './ResponsiveAppBar.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useAuth } from '../Hooks/Auth';
import Col from 'react-bootstrap/Col';




function ResponsiveAppBar() {
  const navigate = useNavigate()
  const auth = useAuth();
  const [showNavbar, setShowNavbar] = useState(false)
  const pages = ["About", "Menu", "Gallery", "Local Farmers", "Contact"];
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
            <Row id='nav-row-container'>
              <Col onClick={() => navigate('/')}>
                <img src={`/gustardsbistro.png`} id='logo'></img>
              </Col>
              <Col className='menu-icon' onClick={handleShowNavbar}>
                <div id='hamburger'>
                  <div id='bar1'></div>
                  <div id='bar2'></div>
                  <div id='bar3'></div>
                </div>
              </Col>
              <Col id='wide-nav'>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                  <ul>

                    {!auth.userToken && <li>
                                          <NavLink to="/">Home</NavLink>
                                        </li>}
                    
                    {!auth.userToken && <li>
                                          <NavLink to="/about">About</NavLink>
                                        </li>}
                    
                    {!auth.userToken && <li>
                                          <NavLink to="/menu">Menu</NavLink>
                                        </li>}
                    
                    {!auth.userToken && <li>
                                          <NavLink to="/gallery">Gallery</NavLink>
                                        </li>}
                    
                    {!auth.userToken && <li>
                                          <NavLink to="/localfarmers">Local Farmers</NavLink>
                                        </li>}
                    
                    {!auth.userToken && <li>
                                          <NavLink to="/contact">Contact</NavLink>
                                        </li>}

                    {auth.userToken && <li className='dropdown'   id='all-pages-link' onMouseEnter={() => {
                                          const dropdown = document.getElementById('dropdown-content')
                                          dropdown.style.display = 'flex'
                                        }}
                                        
                                        onMouseLeave={() => {
                                          const dropdown = document.getElementById('dropdown-content')

                                          dropdown.style.display = 'none'
                                        }}
                                        >
                                          <NavLink to='#'>All Other Pages</NavLink>
                                          <div 
                                          id='dropdown-content'
                                          >
                                            <NavLink to='/'>Home</NavLink>
                                            <NavLink to='/about'>About</NavLink>
                                            <NavLink to='/menu'>Menu</NavLink>
                                            <NavLink to='/gallery'>Gallery</NavLink>
                                            <NavLink to='/localfarmers'>Local Farmers</NavLink>
                                            <NavLink to='/contact'>Contact</NavLink>
                                          </div>
                                        </li>
                                        }
                    
                    {auth.userToken && <li className='condensed-dropdown'>
                                        <NavLink to='/'>Home</NavLink>
                                      </li>}
                    
                    {auth.userToken && <li className='condensed-dropdown'>
                                        <NavLink to='/about'>About</NavLink>
                                      </li>}
                    
                    {auth.userToken && <li className='condensed-dropdown'>
                                        <NavLink to='/menu'>Menu</NavLink>
                                      </li>}
                    
                    {auth.userToken && <li className='condensed-dropdown'>
                                        <NavLink to='/gallery'>Gallery</NavLink>
                                      </li>}
                    
                    {auth.userToken && <li className='condensed-dropdown'>
                                        <NavLink to='/localfarmers'>Local Farmers</NavLink>
                                      </li>}
                    
                    {auth.userToken && <li className='condensed-dropdown'>
                                        <NavLink to='/contact'>Contact</NavLink>
                                      </li>}                    

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