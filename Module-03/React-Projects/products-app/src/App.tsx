import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Products from './pages/Products'
import PageNotFound from './pages/PageNotFound'

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <DefaultLayout />,
      errorElement: <PageNotFound />,
      children: [
        {index: true, element: <Home />},
        {path: 'login', element: <Login />},
        {path: 'products', element: <Products />}
      ]
    }
  ])

  return (<RouterProvider router={router} />)
}

export default App
