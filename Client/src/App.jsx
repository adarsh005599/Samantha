import React, { useState } from 'react'
import {Route, Routes, useLocation} from "react-router-dom"
import SideBar from "./components/SideBar"
import ChatBox from './components/ChatBox'
import Credits from './pages/Credits'
import Coumunity from './pages/Coumunity'
import { assets } from './assets/assets'
import Loading from './pages/Loding'
import LoginPage from './pages/Login'
import { useAppContext } from './context/AppContext'

const App = () => {

  const {user} = useAppContext()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const {pathname}  = useLocation()

  if(pathname=== '/loading') return <Loading/>
  return (
    <>
    
    {!isMenuOpen && <img src={assets.menu_icon} className='absolute top-3 left-3 w-8 h-8 cursor-pointer md:hidden not-dark:invert'
    onClick={() => setIsMenuOpen(true)}/>}
    {user ? (
      <div className='dark:bg-gradient-to-b from=[#242124] to-[#000000] dark:text-white'>
      <div className='flex h-screen w-screen'>
      <SideBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <Routes>
        
        <Route path="/" element={<ChatBox/>}/>
        <Route path="/credits" element={<Credits/>}/>t
        <Route path="/community" element={<Coumunity/>}/>
      </Routes>
    </div>
    </div>
    ) : 
    (
      <div className='bg-gradient-to-b from-[#242124] to-[#000000] flex items-center justify-center h-screen w-screen '>
         <LoginPage/>
        </div>
     
    )}
    
    
    </>
  )
}

export default App