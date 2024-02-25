import React, { useState } from 'react'
import './Menu.css'
import LunchMenu from '../components/LunchMenu';
import DinnerMenu from '../components/DinnerMenu';

const Menu = (props) => {
  
  const { menuItems, currentMenu, setCurrentMenu } = props

  return (

    <>

      {currentMenu === 'lunch' && <LunchMenu
                                      menuItems={menuItems}
                                      currentMenu={currentMenu}
                                      setCurrentMenu={setCurrentMenu}
                                    />
      }

      {currentMenu === 'dinner' &&  <DinnerMenu 
                                        menuItems={menuItems}
                                        currentMenu={currentMenu}
                                        setCurrentMenu={setCurrentMenu}
                                      />
      }
        
    </>
  )
}

export default Menu