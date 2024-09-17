import React from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import { HiChatBubbleLeftRight } from 'react-icons/hi2'

const App = () => {
  return (
    <div className='app'>
      <Home />
      <button className='btn-click'><span><HiChatBubbleLeftRight /></span></button>
    </div>
  )
}

export default App
