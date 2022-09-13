import React, { useContext } from 'react'
import { SearchInputContext } from '../../../context/searchInputProvider'
import { Input, Logo, Container } from './styles'

export function Navbar() {
  const { searchInput, setSearchInput } = useContext(SearchInputContext)

  return (
    <Container color="primary" size="lg">
      <Logo href="#" color="primary" size="lg">
        PokéAPI
      </Logo>
      <Input
        color="primary"
        type="text"
        placeholder="Digite um nome..."
        value={searchInput}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchInput(e.target.value)
        }}
      />
    </Container>
  )
}
