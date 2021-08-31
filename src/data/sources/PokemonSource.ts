import { path } from '../models/settings'
import client from '../api'

// TODO: Add/create interfaces for this responses

export const getPokemon = (data) =>
  client({
    url: path.GetPokemon,
    method: 'GET',
    data,
  })
