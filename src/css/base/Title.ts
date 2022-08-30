import { styled } from '../base'

export const Title = styled('h1', {
  variants: {
    font_size: {
      lg: {
        fontSize: '34px',
        textTransform: 'uppercase',
        fontWeight: '800'
      },
      md: {
        fontSize: '28px',
        textTransform: 'uppercase',
        fontWeight: '700'
      },
      sm: {
        fontSize: '22px',
        textTransform: 'uppercase',
        fontWeight: '600'
      }
    },
    font_color: {
      black: {
        color: '$black'
      },
      gray: {
        color: '$gray'
      }
    }
  }
})
