export default {
  breakpoints: [ '40em', '56em', '64em' ],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontWeights: {
    heading: 100,
    body: 200,
    bold: 700,
  },
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
  },
  layout: {
    nav: {
      fontSize: '12px',
      textTransform: 'uppercase',
      fontWeight: 100,
      py: 3,
      'a': {
        color: 'pampas',
      },
      'a:hover': {
        color: 'schoolBus',
        transition: 'all 500ms',
        textDecoration: 'none',
      },
      '@media screen and (max-width: 64em)': {
        px: 3,
      },
    },
    main: {
      flex: 1,
      color: 'pampas',
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
        color: 'gullGray',
      },
      'a:hover': {
        color: 'schoolBus',
        textDecoration: 'none',
      },
      '@media screen and (max-width: 64em)': {
        px: '7%',
      },
    },
  },
};