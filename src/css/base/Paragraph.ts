import { styled } from '../base'

export const Paragraph = styled('p', {
  variants: {
    font_size: {
      lg: {
        fontSize: '18px',
        fontWeight: '600'
      },
      md: {
        fontSize: '16px',
        fontWeight: '400'
      },
      sm: {
        fontSize: '14px',
        fontWeight: '400'
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
