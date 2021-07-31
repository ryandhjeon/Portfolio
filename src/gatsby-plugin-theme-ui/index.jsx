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
  // fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontSizes: ['0.75rem', '0.875rem', '1rem', '1.125rem', '1.25rem', '1.5rem', '1.75rem', '2rem', '2.25rem', '2.625rem', '3rem', '3.375rem', '3.75rem', '4.25rem', '4.75rem', '5.25rem', '5.75rem'],
  lineHeights: [1, 1.25, 1.5, 1.75],
  fontWeights: {
    xs: 100,
    sm: 200,
    md: 400,
    lg: 700,
    bold: 800,
  },
  styles: {
    'a': {
      color: 'red !important',
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
      height: '45px !important',
      mx: 'auto',
      px: '20px',
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
      color: 'pampas',
    },
    footer: {
      fontSize: '1',
      fontWeight: 'sm',
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