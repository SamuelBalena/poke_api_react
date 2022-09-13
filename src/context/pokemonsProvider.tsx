import React, { useEffect, useState } from 'react'
import { pokemonDataBase } from '../services/api_response'
import { PokemonsProps } from '../utils/PokemonsProps'

interface PokemonsProviderProps {
  children: React.ReactNode
}

export const PokemonsContext = React.createContext<PokemonsProps[]>([])

export const PokemonsProvider = ({ children }: PokemonsProviderProps) => {
  const [pokemons, setPokemons] = useState<PokemonsProps[]>([])

  async function fetchData() {
    try {
      // const response = await api.get('pokemon' + `/${searchPokemon}`) // Passando o estado na url da requisição
      // const data = await response.data
      setPokemons(pokemonDataBase)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <PokemonsContext.Provider value={pokemons}>
      {children}
    </PokemonsContext.Provider>
  )
}