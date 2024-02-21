import React, { useState } from 'react'
import './Menu.css'
import LunchMenu from '../components/LunchMenu';
import DinnerMenu from '../components/DinnerMenu';

const Menu = (props) => {
  
  const { menuItems } = props
  const [menuToDisplay, setMenuToDisplay] = useState('lunch')

  return (

    <>

      {menuToDisplay === 'lunch' && <LunchMenu 
                                      setMenuToDisplay={setMenuToDisplay}
                                      menuItems={menuItems}
                                    />
      }

      {menuToDisplay === 'dinner' &&  <DinnerMenu 
                                        setMenuToDisplay={setMenuToDisplay}
                                        menuItems={menuItems}
                                      />
      }
        
    </>
  )
}

export default Menu