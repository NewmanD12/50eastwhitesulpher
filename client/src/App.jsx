import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Register from './Pages/Register'
import Welcome from './Pages/Welcome'
import Login from './Pages/Login'
import About from './Pages/About'
import Menu from './Pages/Menu'
import Gallery from './Pages/Gallery'
import LocalFarmers from './Pages/LocalFarmers'
import Contact from './Pages/Contact'
import { useEffect, useState } from 'react';
import axios from 'axios';
import CreateNewMenuItem from './Pages/CreateNewMenuItem'
import AdminPage from './Pages/AdminPage'
import CreateNewUser from './Pages/CreateNewUser'
import CreateNewFarmer from './Pages/CreateNewFarmer'

function App() {

  const menuItemsEndpoint = import.meta.env.VITE_MENUITEMS_ENDPOINT
  const localFarmersEndpoint = import.meta.env.VITE_LOCALFARMERS_ENDPOINT
  
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
          path : '/register',
          element : <Register />
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
          path :'/admin', 
          element : <AdminPage />
        },
        {
          path : '/create-new-user',
          element : <CreateNewUser />
        },
        {
          path : '/create-new-menu-item',
          element : <CreateNewMenuItem 
                      menuItemsEndpoint={menuItemsEndpoint}
                    />
        },
        {
          path : '/create-new-farmer',
          element : <CreateNewFarmer 
                      localFarmersEndpoint={localFarmersEndpoint}
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
