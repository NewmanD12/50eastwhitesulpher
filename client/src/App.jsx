import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Welcome from './Pages/Welcome'
import Layout from './components/Layout'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout />
  }
])

function App() {

  return (
      <RouterProvider router={router} />
  )
}

export default App
