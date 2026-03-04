// import { useState } from 'react'
// import {
//   Box, Container, Typography, Grid, Card, CardContent,
//   Chip, Button, Stack, Tab, Tabs,
// } from '@mui/material'
// import OpenInNewIcon from '@mui/icons-material/OpenInNew'
// import { NavLink } from 'react-router-dom'

// const projects = [
//   { id: 1, title: 'FinanceApp', category: 'Desarrollo', tags: ['React','Node.js','PostgreSQL'], desc: 'Plataforma de gestión financiera personal con dashboard de analytics en tiempo real.', color: '#00E5A0', year: '2024' },
//   { id: 2, title: 'BrandMaster', category: 'Branding',    tags: ['Illustrator','Figma'],          desc: 'Identidad visual completa para startup de EdTech con presencia en 5 países.', color: '#FFB830', year: '2024' },
//   { id: 3, title: 'ShopVerse',  category: 'Desarrollo', tags: ['Next.js','Stripe','MongoDB'],    desc: 'E-commerce de moda con sistema de recomendaciones basado en IA.', color: '#0AB8FF', year: '2024' },
//   { id: 4, title: 'Mediko UX',  category: 'Diseño',      tags: ['Figma','Research','Testing'],    desc: 'Rediseño completo del sistema de citas médicas para clínica con 50k+ usuarios.', color: '#A855F7', year: '2023' },
//   { id: 5, title: 'CryptoDesk', category: 'Desarrollo', tags: ['React','WebSocket','Charts'],    desc: 'Trading dashboard para exchange de criptomonedas con datos en tiempo real.', color: '#EC4899', year: '2023' },
//   { id: 6, title: 'NovaAgency', category: 'Branding',    tags: ['Brand','Motion','Web'],          desc: 'Rebranding completo de agencia creativa incluyendo web, social y material impreso.', color: '#F97316', year: '2023' },
// ]

// const categories = ['Todos', 'Desarrollo', 'Diseño', 'Branding']

// export default function Portfolio() {
//   const [tab, setTab] = useState('Todos')
//   const filtered = tab === 'Todos' ? projects : projects.filter(p => p.category === tab)

//   return (
//     <>
//       {/* Hero */}
//       <Box sx={{ py: 14, background: '#060810', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
//         <Box sx={{
//           position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
//           width: 600, height: 600, borderRadius: '50%',
//           background: 'radial-gradient(circle, rgba(10,184,255,0.06) 0%, transparent 70%)',
//           pointerEvents: 'none',
//         }} />
//         <Container maxWidth="md">
//           <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 3, display: 'block', mb: 2 }}>
//             — Portafolio
//           </Typography>
//           <Typography variant="h1" sx={{ fontSize: { xs: '2.4rem', md: '3.6rem' }, fontWeight: 800, color: 'text.primary', mb: 3, lineHeight: 1.1 }}>
//             Proyectos que{' '}
//             <Box component="span" sx={{ background: 'linear-gradient(90deg,#0AB8FF,#A855F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
//               hablan por sí solos
//             </Box>
//           </Typography>
//           <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 300, maxWidth: 480, mx: 'auto', lineHeight: 1.8 }}>
//             Más de 250 proyectos entregados. Aquí te mostramos una selección de los que más nos enorgullecen.
//           </Typography>
//         </Container>
//       </Box>

//       {/* Projects */}
//       <Box sx={{ py: 10, background: '#080C16' }}>
//         <Container maxWidth="lg">
//           {/* Filter tabs */}
//           <Box sx={{ display: 'flex', justifyContent: 'center', mb: 7 }}>
//             <Tabs
//               value={tab}
//               onChange={(_, v) => setTab(v)}
//               sx={{
//                 '& .MuiTabs-indicator': { background: 'primary.main', height: 2 },
//                 '& .MuiTab-root': {
//                   fontFamily: '"Syne",sans-serif', fontWeight: 600, fontSize: '0.85rem',
//                   color: 'text.secondary', textTransform: 'none', minWidth: 80,
//                   '&.Mui-selected': { color: 'primary.main' },
//                 },
//                 background: '#0E1420',
//                 borderRadius: 2,
//                 border: '1px solid #1A2233',
//                 p: 0.5,
//               }}
//             >
//               {categories.map(c => <Tab key={c} label={c} value={c} />)}
//             </Tabs>
//           </Box>

//           <Grid container spacing={3}>
//             {filtered.map(p => (
//               <Grid item xs={12} sm={6} md={4} key={p.id}>
//                 <Card sx={{ height: '100%', cursor: 'pointer', overflow: 'hidden' }}>
//                   {/* Color header */}
//                   <Box sx={{
//                     height: 140,
//                     background: `linear-gradient(135deg, ${p.color}30, ${p.color}08)`,
//                     borderBottom: `1px solid ${p.color}20`,
//                     display: 'flex', alignItems: 'center', justifyContent: 'center',
//                     position: 'relative',
//                   }}>
//                     <Typography
//                       sx={{
//                         fontFamily: '"Syne",sans-serif', fontWeight: 800,
//                         fontSize: '2.8rem', color: p.color, opacity: 0.25,
//                         letterSpacing: '-2px',
//                       }}
//                     >
//                       {p.title.slice(0,2).toUpperCase()}
//                     </Typography>
//                     <Chip
//                       label={p.year}
//                       size="small"
//                       sx={{
//                         position: 'absolute', top: 12, right: 12,
//                         background: 'rgba(0,0,0,0.4)', color: 'text.secondary',
//                         fontSize: '0.7rem', fontWeight: 600,
//                       }}
//                     />
//                     <Box sx={{
//                       position: 'absolute', bottom: 0, left: 0, right: 0,
//                       height: '50%',
//                       background: `linear-gradient(to bottom, transparent, ${p.color}10)`,
//                     }} />
//                   </Box>

//                   <CardContent sx={{ p: 3 }}>
//                     <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
//                       <Typography variant="h6" color="text.primary" sx={{ fontSize: '1rem' }}>{p.title}</Typography>
//                       <OpenInNewIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
//                     </Box>
//                     <Chip label={p.category} size="small" sx={{ mb: 2, background: `${p.color}12`, color: p.color, fontWeight: 600, fontSize: '0.7rem' }} />
//                     <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 2.5 }}>
//                       {p.desc}
//                     </Typography>
//                     <Stack direction="row" spacing={0.8} flexWrap="wrap" gap={0.8}>
//                       {p.tags.map(t => (
//                         <Chip key={t} label={t} size="small" variant="outlined"
//                           sx={{ borderColor: '#1A2233', color: 'text.secondary', fontSize: '0.7rem' }}
//                         />
//                       ))}
//                     </Stack>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>

//           {/* CTA */}
//           <Box sx={{ textAlign: 'center', mt: 10 }}>
//             <Typography variant="h5" color="text.primary" sx={{ mb: 2, fontWeight: 700 }}>
//               ¿Te gustó lo que viste?
//             </Typography>
//             <Typography color="text.secondary" sx={{ mb: 4 }}>
//               Cuéntanos sobre tu proyecto y hagamos algo increíble juntos.
//             </Typography>
//             <Button variant="contained" color="primary" size="large" component={NavLink} to="/contacto">
//               Quiero un proyecto así →
//             </Button>
//           </Box>
//         </Container>
//       </Box>
//     </>
//   )
// }

import { useState } from 'react'
import {
  Box, Container, Typography, Grid, Card, CardContent,
  Chip, Button, Stack, Tabs, Tab, Tooltip,
} from '@mui/material'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import OpenInNewIcon    from '@mui/icons-material/OpenInNew'
import ScienceIcon      from '@mui/icons-material/Science'
import TelescopeIcon    from '@mui/icons-material/Explore'
import MenuBookIcon     from '@mui/icons-material/MenuBook'

// ─────────────────────────────────────────────────────────────────────────────
// 📌 INSTRUCCIONES: Reemplaza cada "url" con el link público de Google Drive
//    Formato: https://drive.google.com/file/d/XXXXXXXXXXXXXXX/view?usp=sharing
// ─────────────────────────────────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: 'Sistema Tierra-Luna-Sol',
    category: 'Física',
    tags: ['Sistema Solar', 'Física', 'Movimiento'],
    desc: 'Estudio del sistema tierra-luna-sol, sus movimientos, distancias y fenómenos astronómicos relacionados.',
    color: '#0AB8FF',
    year: '2025',
    autores: 'Estudiantes Pumahue Peñalolén',
    url: 'PEGA_AQUI_EL_LINK_DE_GOOGLE_DRIVE', // ← reemplazar
  },
  {
    id: 2,
    title: 'Revista Físicaaa Vol. 1',
    category: 'Física',
    tags: ['Física', 'Experimentos', 'Ciencias'],
    desc: 'Primera edición de la revista de física con artículos sobre mecánica, termodinámica y ondas.',
    color: '#00E5A0',
    year: '2025',
    autores: 'Estudiantes Pumahue Peñalolén',
    url: 'https://drive.google.com/file/d/1TMs2LAib2_6d_Dn2Mmc3d64rUf8gW29i/view?usp=sharing' // ← reemplazar
  },
  {
    id: 3,
    title: 'Revista Física Vol. 2',
    category: 'Física',
    tags: ['Física', 'Electricidad', 'Magnetismo'],
    desc: 'Segunda edición con énfasis en electricidad, magnetismo y física moderna.',
    color: '#00E5A0',
    year: '2025',
    autores: 'Estudiantes Pumahue Peñalolén',
    url: 'PEGA_AQUI_EL_LINK_DE_GOOGLE_DRIVE', // ← reemplazar
  },
  {
    id: 4,
    title: 'Revista Digital Astronomía',
    category: 'Astronomía',
    tags: ['Astronomía', 'Digital', 'Universo'],
    desc: 'Revista digital sobre astronomía moderna, tecnología espacial y exploración del universo.',
    color: '#A855F7',
    year: '2025',
    autores: 'Estudiantes Pumahue Peñalolén',
    url: 'PEGA_AQUI_EL_LINK_DE_GOOGLE_DRIVE', // ← reemplazar
  },
  {
    id: 5,
    title: 'Revista Astronómica I°A',
    category: 'Astronomía',
    tags: ['Astronomía', 'I°A', 'Estrellas'],
    desc: 'Publicación del curso I°A con investigaciones sobre constelaciones, planetas y fenómenos celestes.',
    color: '#A855F7',
    year: '2025',
    autores: 'Curso I°A · Pumahue Peñalolén',
    url: 'PEGA_AQUI_EL_LINK_DE_GOOGLE_DRIVE', // ← reemplazar
  },
  {
    id: 6,
    title: 'Revista Astronomía',
    category: 'Astronomía',
    tags: ['Astronomía', 'Cosmología', 'Investigación'],
    desc: 'Investigación astronómica con artículos sobre cosmología, agujeros negros y materia oscura.',
    color: '#A855F7',
    year: '2025',
    autores: 'Estudiantes Pumahue Peñalolén',
    url: 'PEGA_AQUI_EL_LINK_DE_GOOGLE_DRIVE', // ← reemplazar
  },
  {
    id: 7,
    title: 'Astrónomas de Chile',
    category: 'Astronomía',
    tags: ['Mujeres en Ciencia', 'Chile', 'Astronomía'],
    desc: 'Especial sobre las mujeres astrónomas chilenas y sus aportes al desarrollo científico del país.',
    color: '#EC4899',
    year: '2025',
    autores: 'Estudiantes Pumahue Peñalolén',
    url: 'PEGA_AQUI_EL_LINK_DE_GOOGLE_DRIVE', // ← reemplazar
  },
  {
    id: 8,
    title: 'Portada Astronomía Ilustrativa',
    category: 'Astronomía',
    tags: ['Diseño', 'Ilustración', 'Astronomía'],
    desc: 'Documento ilustrativo infantil de astronomía con diseño celeste y contenido educativo visual.',
    color: '#FFB830',
    year: '2025',
    autores: 'Estudiantes Pumahue Peñalolén',
    url: 'PEGA_AQUI_EL_LINK_DE_GOOGLE_DRIVE', // ← reemplazar
  },
]

const categories = ['Todas', 'Física', 'Astronomía']

// Ícono según categoría
const CategoryIcon = ({ cat, size = 20 }) => {
  if (cat === 'Física')     return <ScienceIcon   sx={{ fontSize: size }} />
  if (cat === 'Astronomía') return <TelescopeIcon sx={{ fontSize: size }} />
  return <MenuBookIcon sx={{ fontSize: size }} />
}

// Color del indicador de tabs
const tabIndicatorColor = {
  Física:     '#00E5A0',
  Astronomía: '#A855F7',
  Todas:      '#0AB8FF',
}

export default function Portfolio() {
  const [tab, setTab] = useState('Todas')
  const filtered = tab === 'Todas' ? projects : projects.filter(p => p.category === tab)

  const handleOpen = (url) => {
    if (url === 'PEGA_AQUI_EL_LINK_DE_GOOGLE_DRIVE') {
      alert('⚠️ Aún no has configurado el link de este PDF.\nReemplaza el campo "url" en Portfolio.jsx')
      return
    }
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      {/* ── Hero ── */}
      <Box sx={{
        py: 14, background: '#060810',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <Box sx={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          width: 700, height: 700, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <Container maxWidth="md">
          <Chip
            icon={<PictureAsPdfIcon sx={{ fontSize: '16px !important', color: '#EC4899 !important' }} />}
            label={`${projects.length} publicaciones disponibles`}
            sx={{ mb: 3, background: 'rgba(236,72,153,0.1)', border: '1px solid rgba(236,72,153,0.25)', color: '#EC4899', fontWeight: 600 }}
          />
          <Typography variant="h1" sx={{ fontSize: { xs: '2.4rem', md: '3.6rem' }, fontWeight: 800, color: 'text.primary', mb: 3, lineHeight: 1.1 }}>
            Revistas{' '}
            <Box component="span" sx={{ background: 'linear-gradient(90deg,#A855F7,#0AB8FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Científicas
            </Box>
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 300, maxWidth: 520, mx: 'auto', lineHeight: 1.8 }}>
            Publicaciones de Física y Astronomía elaboradas por los estudiantes del Colegio Pumahue Peñalolén.
          </Typography>
        </Container>
      </Box>

      {/* ── Grid de revistas ── */}
      <Box sx={{ py: 10, background: '#080C16' }}>
        <Container maxWidth="lg">

          {/* Filtro por asignatura */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 7 }}>
            <Tabs
              value={tab}
              onChange={(_, v) => setTab(v)}
              sx={{
                background: '#0E1420',
                borderRadius: 2,
                border: '1px solid #1A2233',
                p: 0.5,
                '& .MuiTabs-indicator': {
                  background: tabIndicatorColor[tab] ?? '#0AB8FF',
                  height: 2,
                  borderRadius: 1,
                },
                '& .MuiTab-root': {
                  fontFamily: '"Syne",sans-serif', fontWeight: 600,
                  fontSize: '0.85rem', color: 'text.secondary',
                  textTransform: 'none', minWidth: 100,
                  gap: 0.8,
                  '&.Mui-selected': { color: 'text.primary' },
                },
              }}
            >
              {categories.map(c => (
                <Tab
                  key={c}
                  label={c}
                  value={c}
                  icon={<CategoryIcon cat={c} size={16} />}
                  iconPosition="start"
                />
              ))}
            </Tabs>
          </Box>

          {/* Contador */}
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
            Mostrando <Box component="span" sx={{ color: 'text.primary', fontWeight: 600 }}>{filtered.length}</Box> publicaciones
            {tab !== 'Todas' && <> en <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>{tab}</Box></>}
          </Typography>

          <Grid container spacing={3}>
            {filtered.map(p => (
              <Grid item xs={12} sm={6} md={4} key={p.id}>
                <Card
                  onClick={() => handleOpen(p.url)}
                  sx={{
                    height: '100%',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: `0 20px 48px ${p.color}22`,
                    },
                  }}
                >
                  {/* Header visual */}
                  <Box sx={{
                    height: 150,
                    background: `linear-gradient(135deg, ${p.color}28 0%, ${p.color}08 100%)`,
                    borderBottom: `1px solid ${p.color}25`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative', overflow: 'hidden',
                  }}>
                    {/* Ícono grande decorativo */}
                    <PictureAsPdfIcon sx={{ fontSize: '5rem', color: p.color, opacity: 0.15 }} />

                    {/* Ícono de categoría centrado */}
                    <Box sx={{
                      position: 'absolute',
                      width: 52, height: 52, borderRadius: '12px',
                      background: `${p.color}20`,
                      border: `1.5px solid ${p.color}40`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: p.color,
                    }}>
                      <CategoryIcon cat={p.category} size={24} />
                    </Box>

                    {/* Año */}
                    <Chip
                      label={p.year}
                      size="small"
                      sx={{
                        position: 'absolute', top: 12, right: 12,
                        background: 'rgba(0,0,0,0.45)',
                        color: 'text.secondary',
                        fontSize: '0.68rem', fontWeight: 600,
                      }}
                    />

                    {/* Abrir PDF badge */}
                    <Box sx={{
                      position: 'absolute', bottom: 10, right: 12,
                      display: 'flex', alignItems: 'center', gap: 0.5,
                      color: p.color, opacity: 0.7,
                    }}>
                      <OpenInNewIcon sx={{ fontSize: 13 }} />
                      <Typography sx={{ fontSize: '0.68rem', fontWeight: 600 }}>Abrir PDF</Typography>
                    </Box>
                  </Box>

                  {/* Contenido */}
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="h6" color="text.primary" sx={{ fontSize: '0.97rem', fontWeight: 700, lineHeight: 1.3, flex: 1, pr: 1 }}>
                        {p.title}
                      </Typography>
                    </Box>

                    <Chip
                      label={p.category}
                      size="small"
                      icon={<CategoryIcon cat={p.category} size={12} />}
                      sx={{ mb: 2, background: `${p.color}12`, color: p.color, fontWeight: 600, fontSize: '0.68rem', border: `1px solid ${p.color}25` }}
                    />

                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 2 }}>
                      {p.desc}
                    </Typography>

                    {/* Autores */}
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 2, fontStyle: 'italic' }}>
                      ✍️ {p.autores}
                    </Typography>

                    {/* Tags */}
                    <Stack direction="row" flexWrap="wrap" gap={0.8}>
                      {p.tags.map(t => (
                        <Chip
                          key={t} label={t} size="small" variant="outlined"
                          sx={{ borderColor: '#1A2233', color: 'text.secondary', fontSize: '0.67rem' }}
                        />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Stats */}
          <Grid container spacing={3} sx={{ mt: 8 }}>
            {[
              { label: 'Publicaciones',  value: projects.length,                                           color: '#0AB8FF' },
              { label: 'Física',         value: projects.filter(p => p.category === 'Física').length,      color: '#00E5A0' },
              { label: 'Astronomía',     value: projects.filter(p => p.category === 'Astronomía').length,  color: '#A855F7' },
              { label: 'Año',            value: '2025',                                                    color: '#FFB830' },
            ].map(s => (
              <Grid item xs={6} md={3} key={s.label}>
                <Box sx={{ textAlign: 'center', p: 3, border: '1px solid #1A2233', borderRadius: 3, background: '#0E1420' }}>
                  <Typography sx={{
                    fontFamily: '"Syne",sans-serif', fontWeight: 800, fontSize: '2.2rem',
                    color: s.color,
                  }}>
                    {s.value}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
                    {s.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  )
}