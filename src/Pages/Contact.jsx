import { useState } from 'react'
import {
  Box, Container, Typography, Grid, Card, CardContent,
  TextField, Button, Alert, Snackbar, Stack, Chip,
} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import SendIcon from '@mui/icons-material/Send'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const contactInfo = [
  { icon: <EmailIcon />,      label: 'Email',     value: 'hola@nexus.studio',   color: '#00E5A0' },
  { icon: <PhoneIcon />,      label: 'Teléfono',  value: '+52 55 1234 5678',    color: '#0AB8FF' },
  { icon: <LocationOnIcon />, label: 'Ubicación', value: 'Ciudad de México, MX', color: '#FFB830' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return
    // Simulated send
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const inputSx = {
    '& .MuiOutlinedInput-root': {
      background: '#0E1420',
      '& fieldset': { borderColor: '#1A2233' },
      '&:hover fieldset': { borderColor: '#2A3445' },
      '&.Mui-focused fieldset': { borderColor: 'primary.main', borderWidth: 1.5 },
    },
    '& .MuiInputLabel-root.Mui-focused': { color: 'primary.main' },
  }

  return (
    <>
      {/* Hero */}
      <Box sx={{ py: 14, background: '#060810', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <Box sx={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 3, display: 'block', mb: 2 }}>
            — Contacto
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.4rem', md: '3.6rem' }, fontWeight: 800, color: 'text.primary', mb: 3, lineHeight: 1.1 }}>
            Hablemos de tu{' '}
            <Box component="span" sx={{ background: 'linear-gradient(90deg,#A855F7,#EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              próximo proyecto
            </Box>
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 300, maxWidth: 480, mx: 'auto', lineHeight: 1.8 }}>
            Respondemos en menos de 24 horas. Cuéntanos tu idea y te preparamos una propuesta sin costo.
          </Typography>
        </Container>
      </Box>

      {/* Content */}
      <Box sx={{ py: 10, background: '#080C16' }}>
        <Container maxWidth="lg">
          <Grid container spacing={5}>

            {/* Form */}
            <Grid item xs={12} md={7}>
              <Card sx={{ p: 1 }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" color="text.primary" sx={{ mb: 0.5 }}>Envíanos un mensaje</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                    Completa el formulario y nuestro equipo se pondrá en contacto contigo.
                  </Typography>

                  <Stack spacing={2.5}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Nombre completo" name="name" value={form.name} onChange={handleChange} sx={inputSx} />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Correo electrónico" name="email" type="email" value={form.email} onChange={handleChange} sx={inputSx} />
                      </Grid>
                    </Grid>

                    <TextField fullWidth label="Asunto" name="subject" value={form.subject} onChange={handleChange} sx={inputSx} />
                    <TextField fullWidth multiline rows={5} label="¿Cuéntanos de tu proyecto?" name="message" value={form.message} onChange={handleChange} sx={inputSx} />

                    {/* Budget chips */}
                    <Box>
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1.5 }}>
                        Presupuesto estimado (opcional)
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                        {['< $2k', '$2k–$5k', '$5k–$15k', '$15k+'].map(b => (
                          <Chip key={b} label={b} variant="outlined" clickable
                            sx={{ borderColor: '#1A2233', color: 'text.secondary', '&:hover': { borderColor: 'primary.main', color: 'primary.main' } }}
                          />
                        ))}
                      </Stack>
                    </Box>

                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={handleSubmit}
                      endIcon={<SendIcon />}
                      sx={{ alignSelf: 'flex-start', px: 4 }}
                    >
                      Enviar mensaje
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            {/* Sidebar */}
            <Grid item xs={12} md={5}>
              <Stack spacing={3}>
                {contactInfo.map(c => (
                  <Card key={c.label} sx={{ p: 0.5 }}>
                    <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                      <Box sx={{
                        width: 52, height: 52, borderRadius: 2,
                        background: `${c.color}15`, border: `1px solid ${c.color}25`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: c.color, flexShrink: 0,
                      }}>
                        {c.icon}
                      </Box>
                      <Box>
                        <Typography variant="overline" sx={{ color: 'text.secondary', fontSize: '0.65rem', letterSpacing: 1.5, display: 'block' }}>
                          {c.label}
                        </Typography>
                        <Typography variant="subtitle1" color="text.primary" sx={{ fontFamily: '"Syne",sans-serif', fontWeight: 600 }}>
                          {c.value}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                ))}

                {/* Hours card */}
                <Card>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" color="text.primary" sx={{ mb: 2 }}>Horario de atención</Typography>
                    {[
                      { day: 'Lunes – Viernes', hours: '9:00 – 18:00 CST' },
                      { day: 'Sábado',          hours: '10:00 – 14:00 CST' },
                      { day: 'Domingo',         hours: 'Cerrado' },
                    ].map(h => (
                      <Box key={h.day} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                        <Typography variant="body2" color="text.secondary">{h.day}</Typography>
                        <Typography variant="body2" color={h.hours === 'Cerrado' ? 'error.main' : 'primary.main'} sx={{ fontWeight: 600 }}>
                          {h.hours}
                        </Typography>
                      </Box>
                    ))}
                  </CardContent>
                </Card>

                {/* Response time */}
                <Box sx={{
                  p: 3, borderRadius: 2,
                  background: 'linear-gradient(135deg,rgba(0,229,160,0.08),rgba(10,184,255,0.08))',
                  border: '1px solid rgba(0,229,160,0.15)',
                  display: 'flex', alignItems: 'center', gap: 2,
                }}>
                  <CheckCircleIcon sx={{ color: 'primary.main', fontSize: 28, flexShrink: 0 }} />
                  <Box>
                    <Typography variant="subtitle2" color="text.primary">Respuesta garantizada</Typography>
                    <Typography variant="caption" color="text.secondary">Respondemos en menos de 24 horas hábiles</Typography>
                  </Box>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Success snackbar */}
      <Snackbar open={sent} autoHideDuration={5000} onClose={() => setSent(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={() => setSent(false)} severity="success" variant="filled" icon={<CheckCircleIcon />}
          sx={{ background: '#00E5A0', color: '#060810', fontWeight: 600 }}>
          ¡Mensaje enviado! Te contactaremos pronto.
        </Alert>
      </Snackbar>
    </>
  )
}