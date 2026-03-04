import {
  Box, Container, Typography, Grid, Card, CardContent,
  Chip, Button, List, ListItem, ListItemIcon, ListItemText,
} from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import PaletteIcon from '@mui/icons-material/Palette'
import CodeIcon from '@mui/icons-material/Code'
import CampaignIcon from '@mui/icons-material/Campaign'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import { NavLink } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const services = [
  {
    icon: <PaletteIcon sx={{ fontSize: 32 }} />,
    color: '#00E5A0',
    title: 'Diseño UI/UX',
    subtitle: 'Experiencias que convierten',
    desc: 'Creamos interfaces intuitivas y hermosas, desde la investigación de usuarios hasta el prototipo final. Diseño centrado en datos y en personas.',
    items: ['Investigación de usuarios', 'Wireframing y prototipado', 'Design System', 'Pruebas de usabilidad', 'Handoff a desarrollo'],
    price: 'Desde $2,500 USD',
  },
  {
    icon: <CodeIcon sx={{ fontSize: 32 }} />,
    color: '#0AB8FF',
    title: 'Desarrollo Web',
    subtitle: 'Código que escala',
    desc: 'Aplicaciones web modernas con React, Next.js, Node y las mejores prácticas de la industria. Rápidas, seguras y mantenibles.',
    items: ['React / Next.js', 'APIs REST y GraphQL', 'Bases de datos', 'Deploy en la nube', 'Testing y QA'],
    price: 'Desde $4,000 USD',
  },
  {
    icon: <CampaignIcon sx={{ fontSize: 32 }} />,
    color: '#FFB830',
    title: 'Branding Digital',
    subtitle: 'Identidad que perdura',
    desc: 'Construimos la identidad visual completa de tu marca. Logo, paleta, tipografía, y guía de estilo para una presencia coherente y memorable.',
    items: ['Logo y variantes', 'Manual de identidad', 'Paleta tipográfica', 'Templates sociales', 'Presentaciones'],
    price: 'Desde $1,800 USD',
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 32 }} />,
    color: '#A855F7',
    title: 'Consultoría Tech',
    subtitle: 'Estrategia con visión',
    desc: 'Acompañamos a tu equipo en decisiones tecnológicas, arquitectura de software y transformación digital con metodologías ágiles probadas.',
    items: ['Auditoría tecnológica', 'Roadmap de producto', 'Arquitectura de software', 'Capacitación de equipos', 'Mentorías 1:1'],
    price: 'Desde $150 USD/hr',
  },
]

export default function Services() {
  return (
    <>
      {/* Hero */}
      <Box sx={{ py: 14, background: '#060810', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <Box sx={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,229,160,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 3, display: 'block', mb: 2 }}>
            — Nuestros Servicios
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.4rem', md: '3.6rem' }, fontWeight: 800, color: 'text.primary', mb: 3, lineHeight: 1.1 }}>
            Todo lo que tu{' '}
            <Box component="span" sx={{ background: 'linear-gradient(90deg,#00E5A0,#0AB8FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              marca necesita
            </Box>
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 300, maxWidth: 520, mx: 'auto', lineHeight: 1.8 }}>
            Desde el concepto hasta el lanzamiento. Ofrecemos soluciones integrales para empresas que quieren destacar en el mundo digital.
          </Typography>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box sx={{ py: 10, background: '#080C16' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {services.map((s, i) => (
              <Grid item xs={12} md={6} key={s.title}>
                <Card sx={{ height: '100%', p: 1 }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 3 }}>
                      <Box sx={{
                        width: 64, height: 64, borderRadius: 2.5,
                        background: `${s.color}15`,
                        border: `1px solid ${s.color}30`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: s.color,
                      }}>
                        {s.icon}
                      </Box>
                      <Chip
                        label={s.price}
                        size="small"
                        sx={{ background: `${s.color}12`, color: s.color, fontWeight: 600, border: `1px solid ${s.color}25` }}
                      />
                    </Box>

                    <Typography variant="h5" color="text.primary" sx={{ mb: 0.5 }}>{s.title}</Typography>
                    <Typography variant="body2" sx={{ color: s.color, fontWeight: 600, mb: 2 }}>{s.subtitle}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>{s.desc}</Typography>

                    <List dense disablePadding>
                      {s.items.map(item => (
                        <ListItem key={item} disablePadding sx={{ mb: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 28 }}>
                            <CheckCircleOutlineIcon sx={{ fontSize: 16, color: s.color }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={item}
                            primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* CTA */}
          <Box sx={{ mt: 10, p: 6, background: 'linear-gradient(135deg,rgba(0,229,160,0.08),rgba(10,184,255,0.08))', border: '1px solid rgba(0,229,160,0.15)', borderRadius: 4, textAlign: 'center' }}>
            <Typography variant="h4" color="text.primary" sx={{ mb: 2, fontWeight: 800 }}>
              ¿Listo para empezar tu proyecto?
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 4, maxWidth: 400, mx: 'auto' }}>
              Cuéntanos tu idea y te preparamos una propuesta personalizada sin costo.
            </Typography>
            <Button variant="contained" color="primary" size="large" component={NavLink} to="/contacto" endIcon={<ArrowForwardIcon />}>
              Solicitar propuesta gratuita
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
}