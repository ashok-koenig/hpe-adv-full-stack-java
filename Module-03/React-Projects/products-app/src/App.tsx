import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Products from './pages/Products'
import PageNotFound from './pages/PageNotFound'
import { useState } from 'react'
import ProtectRoute from './pages/ProtectRoute'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("auth-token")?true:false)

  const updateLoginStatus = (status: boolean) =>{
    setIsLoggedIn(status)
  }

  const router = createBrowserRouter([
    {
      path:'/',
      element: <DefaultLayout isLoggedIn={isLoggedIn} updateLoginStatus={updateLoginStatus}/>,
      errorElement: <PageNotFound />,
      children: [
        {index: true, element: <Home />},
        {path: 'login', element: <Login updateLoginStatus={updateLoginStatus}/>},
        {path: 'products', element: <ProtectRoute isLoggedIn={isLoggedIn}> <Products /> </ProtectRoute> }
      ]
    }
  ])

  return (<RouterProvider router={router} />)
}

export default App
