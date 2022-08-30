import axios from 'axios'

// https://pokeapi.co/

export const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
})
