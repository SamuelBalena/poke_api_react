import { styled } from '../../base'

export const Item = styled('li', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  variants: {
    size: {
      normal: {
        height: '250px'
      }
    },
    border: {
      normal: {
        borderRadius: '5px'
      }
    },
    shadow: {
      normal: {
        boxShadow: '0px 0px 20px 1px rgba(0,0,0,0.2)'
      }
    }
  }
})
