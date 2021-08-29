import { AxiosResponse } from 'axios'
import { getPokemon } from '../sources/PokemonSource'

export const getPokemonByName = async (name: string) => {
  try {
    const response: AxiosResponse = await getPokemon({
      name,
    })
    const { data } = response
    return data
  } catch (err) {
    console.log(`Ups, we had a problem with your request, ${err}`)
  }
}
