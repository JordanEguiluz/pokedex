import React from 'react'
import CounterLikes from './molecules/StatsItem'
import Stats from '../old/componets/interfaces/pokemonStats/PokemonStats'
import data from '../old/componets/interfaces/pokemonStats/Data'

const App = () => (
  <div className="App">
    <h1>Pokedex</h1>
    {/* <PokemonView />
    <PokemonStats attributes={Data} /> */}
    <CounterLikes />
    <Stats attributes={data} />
  </div>
)

export default App
