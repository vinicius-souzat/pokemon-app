import React from 'react';
import './PokemonInfo.css'; // Importe o arquivo de estilos específicos

function PokemonInfo({ pokemon }) {
  if (!pokemon) {
    return null;
  }

  return (
    <div className="PokemonInfo"> {/* Adicione a classe para aplicar os estilos */}
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Tipo: {pokemon.types[0].type.name}</p>
      <p>Peso: {pokemon.weight} kg</p>
      <p>Altura: {pokemon.height} m</p>
    </div>
  );
}

export default PokemonInfo;
