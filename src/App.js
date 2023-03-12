import React from 'react'
import Navbar from './components/Navabar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Carousel from './components/Navabar/Carousel'
import Cardimage from './pages/Cardimage'
import Footer from './components/Footer'

function App() {

  return (
     <Router>
       <Navbar />
       <Carousel />
       <Cardimage />
       <Footer />
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
       </Routes>
     </Router>
  );
}

export default App;
