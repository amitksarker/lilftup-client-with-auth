import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './routes/Router.jsx'
import AuthProvider from './providers/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <AuthProvider>
  //    <RouterProvider router={Router}></RouterProvider>
  //   </AuthProvider>
  // </StrictMode>,
  <AuthProvider>
    <RouterProvider router={Router} />
  </AuthProvider>
)
