import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Button from './Components/Button'
import Icons from './Components/Icons'
import { useEffect, useState } from 'react'
import OurServices from './pages/OurServices'
import AboutUs from './pages/AboutUs'
import NewAndBlog from './pages/NewAndBlog'
import ContactUs from './pages/ContactUs'
import Footer from './Components/Footer'

function App() {
    const [showNavbar, setShowNavbar] = useState(null)

    useEffect(() => {
      window.innerWidth >= 1024 ?  setShowNavbar(false) :  setShowNavbar(true)
      const handleScreenSize = () => {
       window.innerWidth >= 1024 ?  setShowNavbar(false) :  setShowNavbar(true)       
      }
       window.addEventListener("resize", handleScreenSize)
       return  () => {
           window.removeEventListener("resize", handleScreenSize)
       }
    },[])
  return (
    <BrowserRouter>
    <Navbar show={showNavbar}/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/services' element={<OurServices/>}/>
       <Route path='/about' element={<AboutUs/>}/>
       <Route path='/news & blog' element={<NewAndBlog/>}/>
       <Route path='/contact' element={<ContactUs/>}/>
     </Routes>
     <Footer/>  
    </BrowserRouter>
  )
}

export default App
