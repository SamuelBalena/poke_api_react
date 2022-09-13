import { useContext } from 'react'
import { SearchInputContext } from '../context/searchInputProvider'

export function useSearchContext() {
  const { searchInput, setSearchInput } = useContext(SearchInputContext)
  return { searchInput, setSearchInput }
}
