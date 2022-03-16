import React, { useEffect, useState } from 'react';
import PokeCard from '../../components/PokeCard/PokeCard';
import Dropdown from '../../components/Dropdown/Dropdown';
import { fetchPokemon, fetchPokemonTypes } from '../../services/Pokemon';

export default function Main() {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();
      setPokemons(data);
      const typeData = await fetchPokemonTypes();
      setTypes(typeData);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Dropdown types={types} />
      {pokemons.map((poke) => (
        <PokeCard key={poke.id} {...poke} />
      ))}
    </div>
  );
}
