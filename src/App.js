import PokemonView from "./componets/interfaces/pokemonInterface/PokeView"
import PokemonStats from "./componets/interfaces/pokemonStats/PokemonStats"
import Data from './componets/interfaces/pokemonStats/Data'


const App = () => (
  <div className="App">
      <PokemonView />
      <PokemonStats attributes={Data} />
  </div>
);

export default App;
