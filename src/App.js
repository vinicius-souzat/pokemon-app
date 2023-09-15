import React, { useState } from 'react';
import './App.css'; // Importe o arquivo de estilos gerais
import SearchBar from './components/SearchBar';
import PokemonInfo from './components/PokemonInfo';

function App() {
  const [pokemonData, setPokemonData] = useState(null);

  const handleSearch = (data) => {
    setPokemonData(data);
  };

  return (
    <div className="App">
      <h1>Pokemon App</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="PokemonInfo"> {/* Adicione uma div com a classe para aplicar os estilos */}
        <PokemonInfo pokemon={pokemonData} />
      </div>
    </div>
  );
}

export default App;
