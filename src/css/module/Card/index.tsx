import React, { useContext, useEffect, useState } from 'react'
import { PokemonsContext } from '../../../providers/pokemons'

export function Card() {
  const [pokemonArrayValue, setPokemonArrayValue] = useState([])

  // Chamando a variavel pokemons do contexto
  const pokemons = useContext(PokemonsContext)
  console.log('normal at card', pokemons)

  useEffect(() => {
    // Convertendo pokemons em Array para manipular
    const pokemonsParsedToArray = Object.keys(pokemons).map((key: any) => {
      return [String(key), pokemons[key]] 
      // Tá funcionando, necessário descobrir o motivo de crashar ao recarrecagar a página
      // Motivo deve ser a ordem do carregamento, a conversão dos dados ta rodando antes de receber os dados da api
    })

    console.log(pokemonsParsedToArray[3])
    setPokemonArrayValue(pokemonsParsedToArray[3])
  }, []) // Inserir aqui o fetchData com callback no useEffect
  console.log('array value at pokemon', pokemonArrayValue)

  return (
    <div>
      {pokemonArrayValue.map((pokemon) => {
        return (
          <>
            <h2>{pokemon.name}</h2>
            {/* Quebrar o card em dois componente, este arquivo seria a listagem dos cards, e outro componente será os cards
            passando as informações por props.            
            */}
          </>
        )
      })}
    </div>
  )
}
