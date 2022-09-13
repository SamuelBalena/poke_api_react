import { styled } from '../../base'

export const Container = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'sticky',
  top: 0,
  padding: '55px 210px',
  boxShadow: '0px 0px 25px 5px rgba(0,0,0,0.2)',

  variants: {
    color: {
      primary: {
        backgroundColor: '#FFFAFA'
      }
    },
    size: {
      lg: {
        width: '100%',
        height: '75px'
      }
    }
  }
})

export const Logo = styled('a', {
  textDecoration: 'none',

  variants: {
    color: {
      primary: {
        color: '$black'
      }
    },
    size: {
      lg: {
        fontSize: '36px',
        fontWeight: 'bold'
      }
    }
  }
})

export const Input = styled('input', {
  padding: '5px 30px',
  borderRadius: '50px',
  borderStyle: 'none',

  variants: {
    color: {
      primary: {
        backgroundColor: '#DCDCDC'
      }
    }
  }
})
