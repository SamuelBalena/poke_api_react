import { useContext } from 'react'
import { PokemonsContext } from '../context/pokemonsProvider'

export function usePokemonContext() {
  const pokemons = useContext(PokemonsContext)
  return pokemons
}
