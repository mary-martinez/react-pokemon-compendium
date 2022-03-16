import React, { useEffect, useState } from 'react';
import PokeCard from '../../components/PokeCard/PokeCard';
import { fetchPokemon } from '../../services/Pokemon';

export default function Main() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();
      setPokemons(data);
      console.log(pokemons);
    };
    fetchData();
  }, []);
  return (
    <div>
      {pokemons.map((poke) => (
        <PokeCard key={poke.id} {...poke} />
        // <div key={poke.id}>
        //   <h3>{poke.pokemon}</h3>
        //   <p>(type 1: {poke.type_1}, type 2: {poke.type_2})</p>
        // </div>
      ))}
    </div>
  );
}
