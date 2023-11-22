import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home'
import Contact from './routes/Contact'
import Error from './components/Error'

const router =  createBrowserRouter([
  {
    path:"/",
    element: <Home />,
    errorElement: <Error />
  },
  {
    path:"/contacto",
    element: <Contact />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
