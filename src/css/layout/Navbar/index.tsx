import React from 'react'
import { Input, Logo, Container } from './styles'

export function Navbar() {
  return (
    <Container color="primary" size="lg">
      <Logo href="#" color="primary" size="lg">
        PokéAPI
      </Logo>
      <Input color="primary" type="text" placeholder="Digite um nome..." />
    </Container>
  )
}
