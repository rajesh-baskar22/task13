// import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUpPage from './components/SignUpPage'
import LogInPage from './components/LogInPage'
import PasswordResetPage from './components/PasswordResetPage'
import ResetPage from './components/ResetPage'
import NotFoundPage from './components/NotFoundPage'
import './App.css'


const App =() =>{
  const router = createBrowserRouter([
    {
      path:"/",
      element:<SignUpPage/>
    },
    {
      path:"/login",
        element:<LogInPage/>
    },
    {
      path:"/forgotpassword",
      element:<PasswordResetPage/>
    },
    {
      path:"/resetPage/:verificationString",
      element:<ResetPage/>
    },
    {
      path:"/404page",
      element:<NotFoundPage/>
    }

  ])
  return (
    <RouterProvider router ={router}/>
  )
}

export default App
