import { useState, useEffect, useCallback } from 'react'
import { Box, Typography, IconButton, Chip, useTheme } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIos'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

const slides = [
  {
    tag: 'Diseño UI/UX',
    title: 'Interfaces que enamoran al usuario',
    desc: 'Creamos experiencias digitales centradas en las personas. Cada pixel importa, cada interacción cuenta.',
    gradient: 'linear-gradient(135deg, #00E5A0 0%, #0AB8FF 100%)',
    emoji: '🎨',
    stats: [{ label: 'Proyectos', value: '120+' }, { label: 'Satisfacción', value: '98%' }],
  },
  {
    tag: 'Desarrollo Web',
    title: 'Código limpio, resultados extraordinarios',
    desc: 'Desarrollamos aplicaciones web modernas, rápidas y escalables con las últimas tecnologías del mercado.',
    gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FFB830 100%)',
    emoji: '⚡',
    stats: [{ label: 'Apps lanzadas', value: '85+' }, { label: 'Uptime', value: '99.9%' }],
  },
  {
    tag: 'Branding Digital',
    title: 'Identidades que se recuerdan',
    desc: 'Construimos marcas digitales memorables. Desde el logo hasta la estrategia completa de comunicación.',
    gradient: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)',
    emoji: '✦',
    stats: [{ label: 'Marcas creadas', value: '60+' }, { label: 'Países', value: '12' }],
  },
  {
    tag: 'Consultoría Tech',
    title: 'Estrategia digital para escalar tu negocio',
    desc: 'Te acompañamos en tu transformación digital con asesoría experta, roadmaps claros y ejecución ágil.',
    gradient: 'linear-gradient(135deg, #0AB8FF 0%, #00E5A0 100%)',
    emoji: '🚀',
    stats: [{ label: 'Empresas', value: '40+' }, { label: 'ROI promedio', value: '3.2x' }],
  },
]

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const theme = useTheme()

  const go = useCallback((dir) => {
    if (animating) return
    setAnimating(true)
    setCurrent(prev => (prev + dir + slides.length) % slides.length)
    setTimeout(() => setAnimating(false), 500)
  }, [animating])

  useEffect(() => {
    const t = setInterval(() => go(1), 5000)
    return () => clearInterval(t)
  }, [go])

  const slide = slides[current]

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: 4, border: '1px solid #1A2233' }}>
      {/* Main slide */}
      <Box
        sx={{
          minHeight: { xs: 360, md: 440 },
          background: '#0E1420',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.5s ease',
          opacity: animating ? 0.6 : 1,
          transform: animating ? 'scale(0.99)' : 'scale(1)',
        }}
      >
        {/* Content */}
        <Box sx={{ flex: 1, p: { xs: 4, md: 7 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 2 }}>
          <Chip
            label={slide.tag}
            size="small"
            sx={{
              alignSelf: 'flex-start', mb: 2.5,
              background: 'rgba(0,229,160,0.12)',
              color: 'primary.main',
              fontWeight: 700, fontSize: '0.7rem', letterSpacing: 1.5,
              textTransform: 'uppercase',
            }}
          />
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '1.6rem', md: '2.2rem' },
              fontWeight: 800, color: 'text.primary',
              lineHeight: 1.2, mb: 2,
            }}
          >
            {slide.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 420, lineHeight: 1.8 }}>
            {slide.desc}
          </Typography>
          {/* Stats */}
          <Box sx={{ display: 'flex', gap: 4 }}>
            {slide.stats.map(s => (
              <Box key={s.label}>
                <Typography
                  sx={{
                    fontFamily: '"Syne",sans-serif',
                    fontWeight: 800, fontSize: '2rem',
                    background: slide.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
                  {s.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Visual panel */}
        <Box
          sx={{
            width: { xs: '100%', md: 280 },
            height: { xs: 160, md: 'auto' },
            background: slide.gradient,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '5rem',
            position: 'relative',
            flexShrink: 0,
          }}
        >
          <Box sx={{
            position: 'absolute', inset: 0,
            background: 'rgba(0,0,0,0.15)',
          }} />
          <Box sx={{ position: 'relative', zIndex: 1, fontSize: { xs: '4rem', md: '6rem' } }}>
            {slide.emoji}
          </Box>
          {/* Decorative circles */}
          {[
            { size: 180, top: -40, right: -40, opacity: 0.15 },
            { size: 100, bottom: 20, left: -20, opacity: 0.2 },
          ].map((c, i) => (
            <Box key={i} sx={{
              position: 'absolute',
              width: c.size, height: c.size,
              borderRadius: '50%',
              border: '2px solid rgba(255,255,255,0.5)',
              top: c.top, right: c.right, bottom: c.bottom, left: c.left,
              opacity: c.opacity,
            }} />
          ))}
        </Box>

        {/* Slide number */}
        <Box sx={{
          position: 'absolute', bottom: 20, right: { xs: 16, md: 300 },
          display: 'flex', alignItems: 'center', gap: 0.5, zIndex: 3,
        }}>
          <Typography sx={{ fontFamily: '"Syne",sans-serif', fontWeight: 700, color: 'primary.main', fontSize: '1.1rem' }}>
            {String(current + 1).padStart(2, '0')}
          </Typography>
          <Typography color="text.secondary" sx={{ fontSize: '0.8rem' }}>/ {String(slides.length).padStart(2, '0')}</Typography>
        </Box>
      </Box>

      {/* Controls bar */}
      <Box sx={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        px: 4, py: 2,
        background: '#080C16',
        borderTop: '1px solid #1A2233',
      }}>
        {/* Dots */}
        <Box sx={{ display: 'flex', gap: 1 }}>
          {slides.map((_, i) => (
            <Box
              key={i}
              onClick={() => { if (!animating) { setAnimating(true); setCurrent(i); setTimeout(() => setAnimating(false), 500) } }}
              sx={{
                width: i === current ? 24 : 8,
                height: 8, borderRadius: 4,
                background: i === current ? 'primary.main' : '#1A2233',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </Box>

        {/* Arrows */}
        <Box sx={{ display: 'flex', gap: 1 }}>
          {[-1, 1].map((dir, i) => (
            <IconButton
              key={i}
              onClick={() => go(dir)}
              size="small"
              sx={{
                border: '1px solid #1A2233',
                color: 'text.secondary',
                '&:hover': { borderColor: 'primary.main', color: 'primary.main', background: 'rgba(0,229,160,0.06)' },
                transition: 'all 0.2s',
              }}
            >
              {dir === -1 ? <ArrowBackIcon sx={{ fontSize: 14 }} /> : <ArrowForwardIcon sx={{ fontSize: 14 }} />}
            </IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  )
}