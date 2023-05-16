import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Button from './Components/Button'
import Icons from './Components/Icons'

function App() {

  return (
    <BrowserRouter>
    <Navbar children={<Button content={"Get a free Estimate"} color={'orange'}/>}/>
     <Routes>
       <Route path='/' element={<Home/>}/>
     </Routes>
     <Navbar children={<Icons/>} />
    </BrowserRouter>
  )
}

export default App
