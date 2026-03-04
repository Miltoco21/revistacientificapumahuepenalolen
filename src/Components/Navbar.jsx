// import { useState, useEffect } from 'react'
// import { NavLink, useLocation } from 'react-router-dom'
// import {
//   AppBar, Toolbar, Box, Button, IconButton,
//   Drawer, List, ListItem, ListItemButton, ListItemText,
//   useScrollTrigger, Slide, Typography,
// } from '@mui/material'
// import MenuIcon from '@mui/icons-material/Menu'
// import CloseIcon from '@mui/icons-material/Close'

// const links = [
//   { to: '/',           label: 'Inicio' },
//   { to: '/servicios',  label: 'Servicios' },
//   { to: '/portafolio', label: 'Portafolio' },
//   { to: '/contacto',   label: 'Contacto' },
// ]

// export default function Navbar() {
//   const [drawerOpen, setDrawerOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const location = useLocation()

//   useEffect(() => {
//     const handler = () => setScrolled(window.scrollY > 30)
//     window.addEventListener('scroll', handler)
//     return () => window.removeEventListener('scroll', handler)
//   }, [])

//   useEffect(() => setDrawerOpen(false), [location])

//   return (
//     <>
//       <AppBar
//         position="fixed"
//         elevation={0}
//         sx={{
//           height: 70,
//           justifyContent: 'center',
//           transition: 'background 0.3s ease, backdrop-filter 0.3s ease, border-bottom 0.3s',
//           background: scrolled ? 'rgba(6,8,16,0.88)' : 'transparent',
//           backdropFilter: scrolled ? 'blur(18px)' : 'none',
//           borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
//         }}
//       >
//         <Toolbar sx={{ maxWidth: 1180, width: '100%', mx: 'auto', px: { xs: 2, md: 3 } }}>
//           {/* Logo */}
//           <Box component={NavLink} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 1.2, textDecoration: 'none', flexGrow: { xs: 1, md: 0 } }}>
//             <Box sx={{
//               width: 34, height: 34, borderRadius: '8px',
//               background: '#00E5A0', display: 'flex',
//               alignItems: 'center', justifyContent: 'center',
//             }}>
//               <Typography sx={{ fontFamily: '"Syne",sans-serif', fontWeight: 800, color: '#060810', fontSize: '1rem' }}>RP</Typography>
//             </Box>
//             <Typography sx={{ fontFamily: '"Syne",sans-serif', fontWeight: 800, letterSpacing: '3px', color: '#EDF2F8', fontSize: '1rem' }}>
//               Revista de Ciencias 
//             </Typography>
//           </Box>

//           {/* Desktop nav */}
//           <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5, ml: 'auto' }}>
//             {links.map(l => (
//               <Button
//                 key={l.to}
//                 component={NavLink}
//                 to={l.to}
//                 end={l.to === '/'}
//                 sx={{
//                   color: 'text.secondary',
//                   fontFamily: '"Syne",sans-serif',
//                   fontWeight: 600,
//                   fontSize: '0.85rem',
//                   letterSpacing: '0.5px',
//                   px: 1.8,
//                   '&.active': { color: 'primary.main' },
//                   '&:hover': { color: 'text.primary', background: 'rgba(255,255,255,0.04)' },
//                 }}
//               >
//                 {l.label}
//               </Button>
//             ))}
//             <Button
//               variant="contained"
//               color="primary"
//               component={NavLink}
//               to="/contacto"
//               sx={{ ml: 1.5 }}
//             >
//               Hablemos →
//             </Button>
//           </Box>

//           {/* Mobile burger */}
//           <IconButton
//             sx={{ display: { md: 'none' }, color: 'text.primary' }}
//             onClick={() => setDrawerOpen(true)}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       {/* Mobile Drawer */}
//       <Drawer
//         anchor="right"
//         open={drawerOpen}
//         onClose={() => setDrawerOpen(false)}
//         PaperProps={{ sx: { width: 260, background: '#0E1420', borderLeft: '1px solid #1A2233' } }}
//       >
//         <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
//           <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'text.secondary' }}>
//             <CloseIcon />
//           </IconButton>
//         </Box>
//         <List>
//           {links.map(l => (
//             <ListItem key={l.to} disablePadding>
//               <ListItemButton
//                 component={NavLink}
//                 to={l.to}
//                 end={l.to === '/'}
//                 sx={{
//                   py: 1.8, px: 3,
//                   fontFamily: '"Syne",sans-serif',
//                   '&.active .MuiListItemText-primary': { color: 'primary.main' },
//                   '&:hover': { background: 'rgba(0,229,160,0.06)' },
//                 }}
//               >
//                 <ListItemText
//                   primary={l.label}
//                   primaryTypographyProps={{ fontFamily: '"Syne",sans-serif', fontWeight: 600, fontSize: '1rem' }}
//                 />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//     </>
//   )
// }

import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {
  AppBar, Toolbar, Box, Button, IconButton,
  Drawer, List, ListItem, ListItemButton, ListItemText,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import SchoolIcon from '@mui/icons-material/School'

// ── URL corregida del logo oficial ───────────────────────────────────────
const LOGO_URL =
  'https://www.pumahue.cl/penalolen/wp-content/uploads/sites/44/2025/02/ae5f344b-fb81-462a-8b1f-e87de64b227b.png'

const links = [
  { to: '/',           label: 'Inicio' },
  // { to: '/servicios',  label: 'Servicios' },
  { to: '/portafolio', label: 'Portafolio' },
  { to: '/contacto',   label: 'Contacto' },
]

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [scrolled, setScrolled]     = useState(false)
  const [imgError, setImgError]     = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => setDrawerOpen(false), [location])

  // ── Logo compartido (imagen o fallback) ──────────────────────────────
  const LogoImage = ({ height = 44 }) =>
    !imgError ? (
      <Box
        component="img"
        src={LOGO_URL}
        alt="Colegio Pumahue Peñalolén"
        onError={() => setImgError(true)}
        sx={{
          height,
          maxWidth: 200,
          objectFit: 'contain',
          objectPosition: 'left center',
          display: 'block',
          // Quita el filter si el logo ya tiene colores claros sobre fondo transparente
          filter: 'brightness(0) invert(1)',
          opacity: 0.92,
        }}
      />
    ) : (
      /* Fallback cuando el servidor bloquea la imagen */
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
        <Box sx={{
          width: 34, height: 34, borderRadius: '8px',
          background: 'linear-gradient(135deg,#003087,#0055CC)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <SchoolIcon sx={{ color: '#fff', fontSize: 18 }} />
        </Box>
        <Typography sx={{
          fontFamily: '"Syne",sans-serif', fontWeight: 800,
          letterSpacing: '2px', color: '#EDF2F8', fontSize: '0.9rem',
          lineHeight: 1.1,
        }}>
          PUMAHUE<br />
          <Box component="span" sx={{ fontSize: '0.65rem', letterSpacing: '2px', color: '#4A9EFF', fontWeight: 600 }}>
            PEÑALOLÉN
          </Box>
        </Typography>
      </Box>
    )

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          height: 70,
          justifyContent: 'center',
          transition: 'background 0.3s ease, backdrop-filter 0.3s ease, border-bottom 0.3s',
          background: scrolled ? 'rgba(6,8,16,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(18px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        <Toolbar sx={{ maxWidth: 1180, width: '100%', mx: 'auto', px: { xs: 2, md: 3 } }}>

          {/* ── Logo ── */}
          <Box
            component={NavLink}
            to="/"
            sx={{
              display: 'flex', alignItems: 'center',
              textDecoration: 'none',
              flexGrow: { xs: 1, md: 0 },
            }}
          >
            <LogoImage height={44} />
          </Box>

          {/* ── Desktop nav ── */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5, ml: 'auto' }}>
            {links.map(l => (
              <Button
                key={l.to}
                component={NavLink}
                to={l.to}
                end={l.to === '/'}
                sx={{
                  color: 'text.secondary',
                  fontFamily: '"Syne",sans-serif',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  letterSpacing: '0.5px',
                  px: 1.8,
                  '&.active': { color: 'primary.main' },
                  '&:hover': { color: 'text.primary', background: 'rgba(255,255,255,0.04)' },
                }}
              >
                {l.label}
              </Button>
            ))}
            {/* <Button
              variant="contained"
              color="primary"
              component={NavLink}
              to="/contacto"
              sx={{ ml: 1.5 }}
            >
              Contáctanos →
            </Button> */}
          </Box>

          {/* ── Mobile burger ── */}
          <IconButton
            sx={{ display: { md: 'none' }, color: 'text.primary' }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* ── Mobile Drawer ── */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: { width: 270, background: '#0E1420', borderLeft: '1px solid #1A2233' },
        }}
      >
        {/* Drawer header con logo */}
        <Box sx={{
          px: 3, py: 2.5,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderBottom: '1px solid #1A2233',
        }}>
          <LogoImage height={36} />
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'text.secondary' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ pt: 1 }}>
          {links.map(l => (
            <ListItem key={l.to} disablePadding>
              <ListItemButton
                component={NavLink}
                to={l.to}
                end={l.to === '/'}
                sx={{
                  py: 1.8, px: 3,
                  '&.active .MuiListItemText-primary': { color: 'primary.main' },
                  '&:hover': { background: 'rgba(0,229,160,0.06)' },
                }}
              >
                <ListItemText
                  primary={l.label}
                  primaryTypographyProps={{
                    fontFamily: '"Syne",sans-serif',
                    fontWeight: 600,
                    fontSize: '1rem',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}