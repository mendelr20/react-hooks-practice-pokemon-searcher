import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonArray, setPokemonArray] = useState([])
  const [searchBy, setSearchBy] = useState("")

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(res => res.json())
    .then(setPokemonArray)
  }, [])

  const workingPokeList = pokemonArray.filter((poke) => 
    poke.name.toLowerCase().includes(searchBy.toLowerCase())
    )
  
    function handleAddPokemon(newPokemon) {
      setPokemonArray([...pokemonArray, newPokemon])
    }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon}/>
      <br />
      <Search searchBy={searchBy} onChangeSearch={setSearchBy}/>
      <br />
      <PokemonCollection pokemonArray={workingPokeList}/>
    </Container>
  );
}

export default PokemonPage;
