import React, { useEffect, useState } from 'react'
import { api } from './api'

interface PokemonsProviderProps {
  children: React.ReactNode
}

export const PokemonsContext = React.createContext({})

export const PokemonsProvider = ({ children }: PokemonsProviderProps) => {
  const [pokemons, setPokemons] = useState({})

  async function fetchData() {
    // O problema pode ser aqui tbm, rodando dois useEffect ao mesmo tempo
    // Tentar exportar função para o Card, passando ele no useEffect de lá para converter o json em array
    try {
      const response = await api.get('pokemon')
      const data = await response.data
      setPokemons(data)
      console.log('Deu certo a requisição')
    } catch (error: any) {
      console.log('Deu erro na requisição')
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
