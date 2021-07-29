export default {
  colors: {
    gullGray: '#92A3AB',
    primaryText: 'rgba(255, 255, 255, 0.8)',
    pampas: '#F8F7F3',
    footerBg: '#1F1F1F',
    shark: '#191B1F',
    woodSmoke: '#090A0B',
    background: '#191B1F',
    cornField: '#F8F3C3',
    tan: '#D5A58B',
    schoolBus: '#FEDD00',
    linkedIn: '#0E76A8',
    instagram: '#CD486B',
    twitter: '#00ACEE',
    facebook: '#4267B2',
    bgsuOrange: '#FF7300',
    bgsuBrown: '#4f2c1d',
    navBackground: 'rgba(25, 27, 31, 0.9)',
  },
  breakpoints: [ '40em', '56em', '64em' ],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    xs: 100,
    sm: 200,
    md: 400,
    lg: 700,
    bold: 700,
  },
  styles: {
    root: {

    }
  },
  layout: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1040px',
      maxHeight: '50px',
      mx: 'auto',
      p: '13px 20px',
      textTransform: 'uppercase',
      fontSize: '1',
      fontWeight: 'sm',
      'a': {
        color: 'pampas',
        textDecoration: 'none',
        '&:hover': {
          color: 'schoolBus',
          textDecoration: 'none',
          transition: '500ms',
        },
      },
    },
    main: {
      flex: 1,
      color: 'pampas',
      // overflowX: 'hidden',
      'a': {
        color: 'primaryText',
      },
      'a:hover': {
        color: 'white',
        transition: 'all 500ms',
        textDecoration: 'none',
      },
    },
    footer: {
      fontSize: '12px',
      fontWeight: 100,
      color: 'gullGray',
      bg: 'woodSmoke',
      'a': {
        textDecoration: 'none',
        color: 'gullGray',
      },
      'a:hover': {
        color: 'schoolBus',
      },
      '@media screen and (max-width: 64em)': {
        px: '7%',
      },
    },
  },
};