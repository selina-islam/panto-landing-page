
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Shop from './pages/Shop/Shop'
import Contact from './pages/Contact/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/about' element={ <About />} />
          <Route path='/shop' element={<Shop /> } />
          <Route path='/' element={<Contact /> } />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
