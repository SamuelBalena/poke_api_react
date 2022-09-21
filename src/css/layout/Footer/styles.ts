import { styled } from '../../base'

export const Container = styled('footer', {
  width: '100%',
  height: '150px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    color: {
      primary: {
        backgroundColor: '#DCDCDC'
      }
    }
  }
})
