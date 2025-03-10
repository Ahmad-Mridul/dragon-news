import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import Center from './Components/layouts/Center.jsx'
import Auth from './Components/Auth.jsx'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
      {
        path:"/",
        element:<Navigate to={"/category/01"}></Navigate>
      },
      {
        path:"/category/:id",
        element:<Center></Center>,
        loader:({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      },
      
    ]
  },
  {
    path:"/auth",
    element:<Auth></Auth>,
    children:[
      {
        path:"/auth/login",
        element:<Login></Login>
      },
      {
        path:"/auth/register",
        element:<Register></Register>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
