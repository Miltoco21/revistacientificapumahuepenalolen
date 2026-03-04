import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary:   { main: '#00E5A0', contrastText: '#060810' },
    secondary: { main: '#0AB8FF' },
    background: { default: '#060810', paper: '#0E1420' },
    text: { primary: '#EDF2F8', secondary: '#7A8899' },
  },
  typography: {
    fontFamily: '"DM Sans", sans-serif',
    h1: { fontFamily: '"Syne", sans-serif', fontWeight: 800 },
    h2: { fontFamily: '"Syne", sans-serif', fontWeight: 800 },
    h3: { fontFamily: '"Syne", sans-serif', fontWeight: 700 },
    h4: { fontFamily: '"Syne", sans-serif', fontWeight: 700 },
    h5: { fontFamily: '"Syne", sans-serif', fontWeight: 600 },
    h6: { fontFamily: '"Syne", sans-serif', fontWeight: 600 },
    button: { fontFamily: '"Syne", sans-serif', fontWeight: 700, letterSpacing: '0.5px' },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', borderRadius: 8, padding: '11px 28px', fontSize: '0.9rem' },
        containedPrimary: {
          background: '#00E5A0',
          color: '#060810',
          '&:hover': { background: '#00ffb3', boxShadow: '0 12px 28px rgba(0,229,160,0.35)' },
        },
        outlinedPrimary: {
          borderColor: 'rgba(0,229,160,0.4)',
          '&:hover': { borderColor: '#00E5A0', background: 'rgba(0,229,160,0.06)' },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#0E1420',
          border: '1px solid #1A2233',
          borderRadius: 14,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: '0 20px 48px rgba(0,229,160,0.1)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { background: 'transparent', boxShadow: 'none' },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontFamily: '"Syne", sans-serif', fontWeight: 600 },
      },
    },
  },
})

export default theme