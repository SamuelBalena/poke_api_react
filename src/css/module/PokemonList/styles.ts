import { styled } from '../../base'

export const Container = styled('section', {
  maxWidth: '1180px',
  margin: '0 auto'
})

export const List = styled('ul', {
  margin: '50px 0',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '20px',
  listStyle: 'none'
})
