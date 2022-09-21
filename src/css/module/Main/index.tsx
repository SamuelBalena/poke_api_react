import React from 'react'
import { Title } from '../../base/Title'
import { PokemonList } from '../PokemonList'
import { Container } from './styles'

export function Main() {
  return (
    <Container>
      <Title font_size="md">Veja alguns pokemons...</Title>
      <PokemonList />
    </Container>
  )
}
