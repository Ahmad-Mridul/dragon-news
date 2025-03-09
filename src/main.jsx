import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import Center from './Components/layouts/Center.jsx'
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
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
