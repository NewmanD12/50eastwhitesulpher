import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Welcome from './Pages/Welcome'
import Login from './Pages/Login'
import About from './Pages/About'
import Menu from './Pages/Menu'
import Gallery from './Pages/Gallery'
import LocalFarmers from './Pages/LocalFarmers'
import Contact from './Pages/Contact'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const menuItemsEndpoint = import.meta.env.VITE_MENUITEMS_ENDPOINT
  
  const [menuItems, setMenuItems] = useState([])


  useEffect(() => {
    axios.get(`${menuItemsEndpoint}/all-menu-items`)
          .then((res) => {
            setMenuItems(res.data.menuItems)
          })
          .catch((err) => console.log(err))
  }, [])

  const router = createBrowserRouter([
    {
      path : '/',
      element : <Layout />,
      children : [
        {
          index : true,
          element : <Welcome />
        },
        {
          path : '/login',
          element : <Login />
        },
        {
          path : '/about',
          element : <About />
        },
        {
          path : '/menu',
          element : <Menu 
                      menuItems={menuItems}
                    />
        },
        {
          path : '/gallery',
          element : <Gallery /> 
        },
        {
          path : '/localfarmers',
          element : <LocalFarmers />
        },
        {
          path : '/contact',
          element : <Contact />
        }
      ]
    }
  ])

  return (
      <RouterProvider router={router} />
  )
}




export default App
