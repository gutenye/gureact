import * as colors from './colors'

export default {
  mobileOnly: '@media (max-width: 767px)',
  tabletOnly: '@media (min-width: 768px) and (max-width: 1023px)',
  tabletMin: '@media (min-width: 768px)',
  desktopMin: '@media (min-width: 1024px)',
  ...colors,
}

/*
export default {
  primary: {
    background: '#3B5999',
    backgroundDarken: '#344e87',
    color: 'white',
  },
  header: {
    background: 'white',
  },
  body: {
    background: '#F8F8F8',
  },
}
*/
