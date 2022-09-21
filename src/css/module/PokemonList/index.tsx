import React, { useEffect, useState } from 'react'
import { usePokemonContext } from '../../../hooks/usePokemonContext'
import { useSearchContext } from '../../../hooks/useSerchContext'
import { PokemonsProps } from '../../../utils/PokemonsProps'
import { Paragraph } from '../../base/Paragraph'
import { Card } from '../Card'
import { List } from './styles'

export function PokemonList() {
  const [filteredPokemons, setFilteredPokemons] = useState<PokemonsProps[]>([])
  const { searchInput } = useSearchContext()
  const pokemons = usePokemonContext()

  useEffect(() => {
    // Está dentro de if para evitar redenrizações desnecessárias
    if (searchInput.length) {
      setFilteredPokemons(
        pokemons.filter((pokemon) => pokemon.name.includes(searchInput))
      )
    }
  }, [searchInput])

  console.log(filteredPokemons.length)

  return (
    <div>
      {searchInput.length > 0 ? (
        <List>
          {filteredPokemons.map((pokemon: PokemonsProps) => {
            return (
              <Card key={pokemon.id}>
                <img src={pokemon.image} alt={pokemon.name} />
                <p>{pokemon.name}</p>
              </Card>
            )
          })}
        </List>
      ) : (
        <List>
          {pokemons.map((pokemon) => {
            return (
              <Card key={pokemon.id}>
                <img src={pokemon.image} alt={pokemon.name} />
                <Paragraph font_size="md">{pokemon.name}</Paragraph>
              </Card>
            )
          })}
        </List>
      )}
    </div>
  )
}
