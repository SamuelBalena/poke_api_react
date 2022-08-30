import React from 'react'
import ReactDOM from 'react-dom/client'

import { GlobalStyles } from './css/base/GlobalStyles'
import { Header } from './css/layout/Header'
import { Navbar } from './css/layout/Navbar'
import { Main } from './css/module/Main'
import { PokemonsProvider } from './providers/pokemons'

GlobalStyles()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PokemonsProvider>
      <Navbar />
      <Header />
      <Main />
    </PokemonsProvider>
  </React.StrictMode>
)
