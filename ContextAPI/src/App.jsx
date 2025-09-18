import { useState } from 'react'
import './App.css'
import Login from './Login/Login'
import Profile from './Profile/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <>
      <h1>Trying out ContextAPI</h1>
      <UserContextProvider>
         <Login />
         <Profile />
      </UserContextProvider>
     
    </>
  )
}

export default App
