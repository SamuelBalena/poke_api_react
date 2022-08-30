import { createStitches, ScaleValue } from '@stitches/react'

export const { css, styled, globalCss, keyframes } = createStitches({
  theme: {
    colors: {
      title: '#363636',
      white: '#ffffff',
      orange600: '#EC502A',
      orange200: '#F5A895',
      green: '#3EB28B',
      black: '#000000',
      gray: '#797979',
      yellow: '#FFB058'
    },
    space: {
      '0': '0px',
      '1': '1px',
      '4': '0.25rem',
      '8': '0.5rem',
      '12': '0.75rem',
      '16': '1rem',
      '20': '1.25rem',
      '24': '1.5rem',
      '32': '2rem',
      '40': '2.5rem',
      '48': '3rem'
    },

    fonts: {
      fontFamily: "'Poppins', sans-serif"
    },

    radii: {
      full: '9999px',
      default: '5px'
    }
  },

  media: {
    sm: '(max-width: 320px)',
    md: '(max-width: 375px)',
    lg: '(max-width: 520px)',
    tablet: '(max-width: 768px)',
    laptop: '(max-width: 1024px)',
    desktop: '(max-width: 1440px)',
    widescreen: '(max-width: 1920px)'
  },

  utils: {
    px: (value: ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value: ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value
    })
  }
})
