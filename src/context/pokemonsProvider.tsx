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
      localStorage.setItem('@pokemons/data', JSON.stringify(pokemonDataBase))
      const getPokemonsLocalStorage = localStorage.getItem('@pokemons/data')
      if (getPokemonsLocalStorage) {
        const pokemonsValuesParsed = JSON.parse(getPokemonsLocalStorage)
        setPokemons(pokemonsValuesParsed)
      }
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
