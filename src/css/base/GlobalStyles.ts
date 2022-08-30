import { globalCss } from '@stitches/react'

export const GlobalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: '$fontFamily'
  },

  html: {
    scrollBehavior: 'smooth'
  }
})
