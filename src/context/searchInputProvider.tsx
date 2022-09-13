import React, { useState } from 'react'

interface PokemonsProviderProps {
  children: React.ReactNode
}

interface SearchInputContextProps {
  searchInput: string
  setSearchInput: React.Dispatch<React.SetStateAction<string>>
}

export const SearchInputContext = React.createContext<SearchInputContextProps>(
  {} as SearchInputContextProps
)

export const SearchInputProvider = ({ children }: PokemonsProviderProps) => {
  // eslint-disable-next-line no-unused-vars
  const [searchInput, setSearchInput] = useState('')
  console.log(searchInput, 'AQUI NO PROVIDER')

  return (
    <SearchInputContext.Provider value={{ searchInput, setSearchInput }}>
      {children}
    </SearchInputContext.Provider>
  )
}
