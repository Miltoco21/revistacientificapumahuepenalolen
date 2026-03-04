import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

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
