

import Navbar from './pages/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import Footer from './pages/Footer'
import Services from './pages/Services'
import Pricing from './pages/Pricing'

const FashionPage = () => {
  return (
    <>
       <Navbar />
       <Routes>
       <Route index element={<Home />} />
       <Route path='about' element={<Aboutus/>} />
       <Route path='services' element={<Services />} />
       <Route path='pricing' element={<Pricing />} />
      </Routes>
      <Footer />
    </>
  )
}

export default FashionPage
