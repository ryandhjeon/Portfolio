/* eslint-disable */
export default {
  colors: {
    gullGray: '#92A3AB',
    primaryText: 'rgba(255, 255, 255, 0.8)',
    pampas: '#F8F7F3',
    footerBg: '#1F1F1F',
    shark: '#191B1F',
    woodSmoke: '#090A0B',
    background: '#191B1F',
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
  lineHeights: [1, 1.25, 1.5, 1.75],
  fontSizes: ['0.75rem', '0.875rem', '1rem', '1.125rem', '1.25rem', '1.5rem', '1.75rem', '2rem', '2.25rem', '2.625rem', '3rem', '3.375rem', '3.75rem', '4.25rem', '4.75rem', '5.25rem', '5.75rem'],
  fontWeights: {
    xs: 100,
    sm: 200,
    md: 400,
    lg: 700,
    bold: 800,
  },
  styles: {
    'p': {
      fontSize: '3',
      lineHeight: '1.5',
    },
    'a': {
      color: 'bgsuBrown !important',
    },
    'h1': {
      fontSize: 9,
      mt: 3,
    },
    'h2': {
      mt: 6,
    },
    'h3': {
      mt: 5,
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
      height: '60px',
      mx: 'auto',
      px: '30px',
      textTransform: 'uppercase',
      fontSize: '1',
      fontWeight: 'sm',
      overflow: 'hidden',
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