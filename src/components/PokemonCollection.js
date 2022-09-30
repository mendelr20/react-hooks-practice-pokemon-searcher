import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonArray}) {
  
  
  return (
    <Card.Group itemsPerRow={6}>
      {pokemonArray.map(poke => <PokemonCard poke={poke}/>)}
    </Card.Group>
  );
}

export default PokemonCollection;
