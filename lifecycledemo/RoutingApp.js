import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EducationPage from './EducationPage'
import HomePage from './HomePage'

const router=createBrowserRouter([
    {path:'/:id',element:<HomePage />},
    {path:'/education/', element : <EducationPage />}
])

function App() {
  return  <RouterProvider router={router} />
  
}

export default App