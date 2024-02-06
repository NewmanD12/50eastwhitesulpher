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
        element : <Menu />
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

function App() {

  return (
      <RouterProvider router={router} />
  )
}

export default App
