import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ChatPage from './pages/ChatPage'
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/register' element={<RegisterPage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/' element={<ChatPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}
