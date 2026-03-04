import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  Avatar,
  Stack,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarIcon from "@mui/icons-material/Star";
import BoltIcon from "@mui/icons-material/Bolt";
import PaletteIcon from "@mui/icons-material/Palette";
import CodeIcon from "@mui/icons-material/Code";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Carousel from "../Components/Carrousel";

const features = [
  {
    icon: <PaletteIcon />,
    title: "Diseño Único",
    desc: "Cada proyecto es tratado como una obra de arte. Nada genérico, todo personalizado.",
    color: "#00E5A0",
  },
  {
    icon: <CodeIcon />,
    title: "Código Limpio",
    desc: "Arquitecturas modernas, mantenibles y escalables con React, Node y más.",
    color: "#0AB8FF",
  },
  {
    icon: <BoltIcon />,
    title: "Alta Performance",
    desc: "Optimizamos cada milisegundo. Lighthouse 95+ garantizado en todos los proyectos.",
    color: "#FFB830",
  },
  {
    icon: <TrendingUpIcon />,
    title: "Orientado a Resultados",
    desc: "Diseñamos pensando en conversiones, retención y crecimiento real.",
    color: "#A855F7",
  },
];

const testimonials = [
  {
    name: "Ana García",
    role: "CEO · StartupMX",
    text: "Nexus transformó completamente nuestra presencia digital. Los resultados superaron todas las expectativas.",
    rating: 5,
  },
  {
    name: "Carlos Ruiz",
    role: "CTO · Fintech Labs",
    text: "El equipo tiene un nivel técnico y creativo impresionante. Entregaron todo a tiempo y con calidad excepcional.",
    rating: 5,
  },
  {
    name: "María López",
    role: "Fundadora · EduPlatform",
    text: "No solo hicieron el diseño, sino que pensaron en el negocio completo. Una agencia que realmente entiende.",
    rating: 5,
  },
];

const stats = [
  { value: "250+", label: "Proyectos entregados" },
  { value: "98%", label: "Clientes satisfechos" },
  { value: "8", label: "Años de experiencia" },
  { value: "124", label: "Países alcanzados" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <Box
        sx={{
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          background: "#060810",
        }}
      >
        {/* BG Glow */}
        {[
          { top: -200, left: -200, color: "#00E5A0", size: 600 },
          { top: 100, right: -200, color: "#0AB8FF", size: 500 },
        ].map((g, i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              top: g.top,
              left: g.left,
              right: g.right,
              width: g.size,
              height: g.size,
              borderRadius: "50%",
              background: g.color,
              opacity: 0.04,
              filter: "blur(80px)",
              pointerEvents: "none",
            }}
          />
        ))}

        {/* Grid overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              {/* Badge */}
              <Chip
                icon={
                  <StarIcon
                    sx={{
                      fontSize: "14px !important",
                      color: "#FFB830 !important",
                    }}
                  />
                }
                label="Divulgación Científica Escolar "
                sx={{
                  mb: 3,
                  background: "rgba(255,184,48,0.1)",
                  border: "1px solid rgba(255,184,48,0.25)",
                  color: "#FFB830",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                }}
              />

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.6rem", md: "3.8rem", lg: "4.4rem" },
                  fontWeight: 800,
                  lineHeight: 1.08,
                  letterSpacing: "-1.5px",
                  mb: 3,
                  color: "text.primary",
                }}
              >
                Creamos el{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(90deg, #00E5A0, #0AB8FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  futuro digital y científico
                </Box>{" "}
                de nuestros alumnos
              </Typography>

              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ fontWeight: 300, lineHeight: 1.8, mb: 5, maxWidth: 480 }}
              >
                Publicaciones, desarrollo y muestra de nuestros proyectos en
                distintas revistas escolares y científicas.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component={NavLink}
                  to="/contacto"
                  endIcon={<ArrowForwardIcon />}
                >
                  Iniciar proyecto
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  component={NavLink}
                  to="/portafolio"
                >
                  Ver portafolio
                </Button>
              </Stack>

              {/* Clients row */}
              <Box
                sx={{ mt: 6, display: "flex", alignItems: "center", gap: 2 }}
              >
                {/* <Box sx={{ display: 'flex' }}>
                  {['A','B','C','D'].map((l, i) => (
                    <Avatar
                      key={l}
                      sx={{
                        width: 36, height: 36,
                        border: '2px solid #060810',
                        ml: i === 0 ? 0 : -1.2,
                        background: ['#00E5A0','#0AB8FF','#FFB830','#A855F7'][i],
                        fontSize: '0.8rem', fontWeight: 700,
                        color: '#060810',
                      }}
                    >
                      {l}
                    </Avatar>
                  ))}
                </Box> */}
                {/* <Box>
                  <Box sx={{ display: 'flex', gap: 0.3 }}>
                    {[1,2,3,4,5].map(i => <StarIcon key={i} sx={{ color: '#FFB830', fontSize: 14 }} />)}
                  </Box>
                  <Typography variant="caption" color="text.secondary">
                    +250 clientes confían en nosotros
                  </Typography>
                </Box> */}
              </Box>
            </Grid>

            {/* Hero visual */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  background:
                    "linear-gradient(145deg, #0E1420 0%, #111827 100%)",
                  border: "1px solid #1A2233",
                  borderRadius: 4,
                  p: 4,
                  position: "relative",
                  overflow: "hidden",
                  animation: "floatCard 6s ease-in-out infinite",
                  "@keyframes floatCard": {
                    "0%,100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-12px)" },
                  },
                }}
              >
                {/* Barra de título con indicadores de ventana */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 3,
                  }}
                >
                  {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
                    <Box
                      key={c}
                      sx={{
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        background: c,
                      }}
                    />
                  ))}
                  <Box
                    sx={{
                      flex: 1,
                      fontFamily: '"Syne", sans-serif',
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      color: "#A0AEC0",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Pumahue Peñalolén · LAB STEM
                  </Box>
                </Box>

                {/* Área principal: gráfico de barras y métricas */}
                <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                  {/* Gráfico de barras estilizado */}
                  <Box
                    sx={{
                      flex: 2,
                      height: 120,
                      background:
                        "linear-gradient(135deg, #00E5A0 0%, #0AB8FF 100%)",
                      borderRadius: 2,
                      opacity: 0.9,
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "space-around",
                      p: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: 20,
                        height: "95%",
                        bgcolor: "rgba(255,255,255,0.2)",
                        borderRadius: 1,
                      }}
                    />
                    <Box
                      sx={{
                        width: 20,
                        height: "70%",
                        bgcolor: "rgba(255,255,255,0.2)",
                        borderRadius: 1,
                      }}
                    />
                    <Box
                      sx={{
                        width: 20,
                        height: "85%",
                        bgcolor: "rgba(255,255,255,0.2)",
                        borderRadius: 1,
                      }}
                    />
                    <Box
                      sx={{
                        width: 20,
                        height: "60%",
                        bgcolor: "rgba(255,255,255,0.2)",
                        borderRadius: 1,
                      }}
                    />
                    <Box
                      sx={{
                        width: 20,
                        height: "40%",
                        bgcolor: "rgba(255,255,255,0.2)",
                        borderRadius: 1,
                      }}
                    />
                  </Box>

                  {/* Métricas destacadas */}
                  <Box
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1.5,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "#CBD5E0",
                        fontSize: "0.75rem",
                      }}
                    >
                      <span>🔭 Proyectos</span>
                      <span style={{ fontWeight: 700, color: "#00E5A0" }}>
                        12
                      </span>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "#CBD5E0",
                        fontSize: "0.75rem",
                      }}
                    >
                      <span>🤖 Talleres</span>
                      <span style={{ fontWeight: 700, color: "#00E5A0" }}>
                        8
                      </span>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "#CBD5E0",
                        fontSize: "0.75rem",
                      }}
                    >
                      <span>🧪 Alumnos</span>
                      <span style={{ fontWeight: 700, color: "#00E5A0" }}>
                        156
                      </span>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "#CBD5E0",
                        fontSize: "0.75rem",
                      }}
                    >
                      <span>🏆 Ferias</span>
                      <span style={{ fontWeight: 700, color: "#00E5A0" }}>
                        4
                      </span>
                    </Box>
                  </Box>
                </Box>

                {/* Áreas de investigación (barras de progreso) */}
                <Box sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 0.5,
                    }}
                  >
                    <span style={{ color: "#A0AEC0", fontSize: "0.7rem" }}>
                    Innovación
                    </span>
                    <span
                      style={{
                        color: "#00E5A0",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                      }}
                    >
                      50%
                    </span>
                  </Box>
                  <Box
                    sx={{
                      height: 6,
                      background: "#1A2233",
                      borderRadius: 3,
                      mb: 1.5,
                    }}
                  >
                    <Box
                      sx={{
                        width: "50%",
                        height: "100%",
                        background: "linear-gradient(90deg, #00E5A0, #0AB8FF)",
                        borderRadius: 3,
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 0.5,
                    }}
                  >
                    <span style={{ color: "#A0AEC0", fontSize: "0.7rem" }}>
                      Robótica
                    </span>
                    <span
                      style={{
                        color: "#00E5A0",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                      }}
                    >
                      70%
                    </span>
                  </Box>
                  <Box
                    sx={{
                      height: 6,
                      background: "#1A2233",
                      borderRadius: 3,
                      mb: 1.5,
                    }}
                  >
                    <Box
                      sx={{
                        width: "70%",
                        height: "100%",
                        background: "linear-gradient(90deg, #00E5A0, #0AB8FF)",
                        borderRadius: 3,
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 0.5,
                    }}
                  >
                    <span style={{ color: "#A0AEC0", fontSize: "0.7rem" }}>
                      Medioambiente
                    </span>
                    <span
                      style={{
                        color: "#00E5A0",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                      }}
                    >
                      55%
                    </span>
                  </Box>
                  <Box
                    sx={{ height: 6, background: "#1A2233", borderRadius: 3 }}
                  >
                    <Box
                      sx={{
                        width: "55%",
                        height: "100%",
                        background: "linear-gradient(90deg, #00E5A0, #0AB8FF)",
                        borderRadius: 3,
                      }}
                    />
                  </Box>
                </Box>

                {/* Botones de acción */}
                <Box sx={{ display: "flex", gap: 1.5, mt: 3 }}>
                  <Box
                    sx={{
                      height: 36,
                      width: 100,
                      background: "#00E5A0",
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#0E1420",
                      fontFamily: '"Syne", sans-serif',
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    🔬 Explorar
                  </Box>
                  <Box
                    sx={{
                      height: 36,
                      width: 150,
                      background: "#1A2233",
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#CBD5E0",
                      fontFamily: '"Syne", sans-serif',
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      border: "1px solid #2D3748",
                    }}
                  >
                    📅 Calendario
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
