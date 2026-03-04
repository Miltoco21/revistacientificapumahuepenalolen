import { NavLink } from 'react-router-dom'
import { Box, Container, Grid, Typography, IconButton, Divider, Stack } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import SchoolIcon from '@mui/icons-material/School'

// ── URL corregida del logo oficial ───────────────────────────────────────
const LOGO_URL =
  'https://www.pumahue.cl/penalolen/wp-content/uploads/sites/44/2025/02/ae5f344b-fb81-462a-8b1f-e87de64b227b.png'

const navLinks = [
  { to: '/',           label: 'Inicio' },
  { to: '/servicios',  label: 'Revista' },
  { to: '/portafolio', label: 'Tecnología' },
  { to: '/contacto',   label: 'Contacto' },
]

const sections = ['Innovación', 'Robótica', 'Programación', 'Ciencias']

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: '#05080F',
        borderTop: '3px solid #003087',
        pt: 8,
        pb: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>

          {/* ── Brand / Logo ── */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 2.5, minHeight: 80, display: 'flex', alignItems: 'center' }}>
              <Box
                component="img"
                src={LOGO_URL}
                alt="Colegio Pumahue Peñalolén"
                onError={e => {
                  e.currentTarget.style.display = 'none'
                  document.getElementById('logo-fallback').style.display = 'flex'
                }}
                sx={{
                  height: 80,
                  maxWidth: 280,
                  objectFit: 'contain',
                  objectPosition: 'left center',
                  // Sin filtro — muestra los colores originales del logo
                  display: 'block',
                }}
              />
              {/* Fallback si el servidor bloquea la imagen por CORS */}
              <Box
                id="logo-fallback"
                sx={{ display: 'none', alignItems: 'center', gap: 1.5 }}
              >
                <Box sx={{
                  width: 44, height: 44, borderRadius: '10px',
                  background: 'linear-gradient(135deg, #003087, #0055CC)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <SchoolIcon sx={{ color: '#fff', fontSize: 24 }} />
                </Box>
                <Box>
                  <Typography sx={{
                    fontFamily: '"Syne",sans-serif', fontWeight: 800,
                    color: '#EDF2F8', fontSize: '0.95rem', lineHeight: 1.1,
                  }}>
                    COLEGIO PUMAHUE
                  </Typography>
                  <Typography sx={{
                    fontFamily: '"Syne",sans-serif', fontWeight: 600,
                    color: '#4A9EFF', fontSize: '0.75rem', letterSpacing: '1.5px',
                  }}>
                    PEÑALOLÉN
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.9, mb: 3, maxWidth: 300 }}>
              Revista de Tecnología e Innovación del Colegio Pumahue Peñalolén. Exploramos el futuro digital con nuestros estudiantes.
            </Typography>

            {/* Redes sociales */}
            <Stack direction="row" spacing={1}>
              {[
                { Icon: FacebookIcon,  label: 'Facebook' },
                { Icon: InstagramIcon, label: 'Instagram' },
                { Icon: YouTubeIcon,   label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <IconButton
                  key={label}
                  size="small"
                  aria-label={label}
                  sx={{
                    border: '1px solid #1A2233',
                    color: 'text.secondary',
                    '&:hover': {
                      borderColor: '#4A9EFF',
                      color: '#4A9EFF',
                      background: 'rgba(74,158,255,0.08)',
                    },
                    transition: 'all 0.2s',
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* ── Navegación ── */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="overline" sx={{ color: '#4A9EFF', fontFamily: '"Syne",sans-serif', fontWeight: 700, letterSpacing: 2, display: 'block', mb: 2 }}>
              Secciones
            </Typography>
            <Stack spacing={1.5}>
              {navLinks.map(l => (
                <Typography
                  key={l.to}
                  component={NavLink}
                  to={l.to}
                  variant="body2"
                  sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: '#4A9EFF' }, transition: 'color 0.2s' }}
                >
                  {l.label}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* ── Temáticas ── */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="overline" sx={{ color: '#4A9EFF', fontFamily: '"Syne",sans-serif', fontWeight: 700, letterSpacing: 2, display: 'block', mb: 2 }}>
              Temáticas
            </Typography>
            <Stack spacing={1.5}>
              {sections.map(s => (
                <Typography key={s} variant="body2" color="text.secondary">{s}</Typography>
              ))}
            </Stack>
          </Grid>

          {/* ── Contacto ── */}
          <Grid item xs={12} sm={4} md={4}>
            <Typography variant="overline" sx={{ color: '#4A9EFF', fontFamily: '"Syne",sans-serif', fontWeight: 700, letterSpacing: 2, display: 'block', mb: 2 }}>
              Contacto
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.2 }}>
                <LocationOnIcon sx={{ color: '#4A9EFF', fontSize: 18, mt: '2px', flexShrink: 0 }} />
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  Viña Cousiño 5386,<br />Peñalolén, Santiago. Chile
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                <PhoneIcon sx={{ color: '#4A9EFF', fontSize: 18, flexShrink: 0 }} />
                <Typography variant="body2" color="text.secondary">
                  +562 2605 9005
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5, borderColor: '#1A2233' }} />

        {/* ── Barra inferior ── */}
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 1.5,
        }}>
          <Typography variant="caption" color="text.secondary">
            © Colegio Pumahue Peñalolén {new Date().getFullYear()}
          </Typography>

          <Box sx={{
            display: 'flex', alignItems: 'center', gap: 1,
            px: 2, py: 0.8,
            border: '1px solid #1A2233',
            borderRadius: 2,
            background: 'rgba(255,255,255,0.02)',
          }}>
            <SchoolIcon sx={{ color: '#4A9EFF', fontSize: 14 }} />
            <Typography variant="caption" color="text.secondary">
              Colegio Pumahue Peñalolén forma parte de la familia de colegios{' '}
              <Box component="span" sx={{ color: '#4A9EFF', fontWeight: 600 }}>
                Cognita
              </Box>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}