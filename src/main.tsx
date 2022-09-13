import React from 'react'
import ReactDOM from 'react-dom/client'

import { GlobalStyles } from './css/base/GlobalStyles'
import { PokemonsProvider } from './context/pokemonsProvider'
import { Header } from './css/layout/Header'
import { Navbar } from './css/layout/Navbar'
import { Main } from './css/module/Main'
import { SearchInputProvider } from './context/searchInputProvider'

GlobalStyles()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PokemonsProvider>
      <SearchInputProvider>
        <Navbar />
        <Header />
        <Main />
      </SearchInputProvider>
    </PokemonsProvider>
  </React.StrictMode>
)
