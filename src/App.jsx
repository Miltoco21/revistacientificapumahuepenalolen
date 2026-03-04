import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Portfolio from './Pages/Portfolio'
import Contact from './Pages/Contact'

export default function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, pt: '70px' }}>
        <Routes>
          <Route path="/"            element={<Home />} />
          <Route path="/servicios"   element={<Services />} />
          <Route path="/portafolio"  element={<Portfolio />} />
          <Route path="/contacto"    element={<Contact />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  )
}
