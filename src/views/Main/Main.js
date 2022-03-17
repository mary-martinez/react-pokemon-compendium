import React, { useEffect, useState } from 'react';
import PokeCard from '../../components/PokeCard/PokeCard';
import Dropdown from '../../components/Dropdown/Dropdown';
import Search from '../../components/Search/Search';
import './Main.css';
import { fetchPokemon, fetchPokemonTypes, fetchFilteredPokemon } from '../../services/Pokemon';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [type, setType] = useState('all');
  const [searchPokemon, setSearchPokemon] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();
      setPokemon(data);
      const typeData = await fetchPokemonTypes();
      setTypes(typeData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchFilteredData = async () => {
      const data = await fetchFilteredPokemon(type, searchPokemon);
      setPokemon(data);
    };
    fetchFilteredData();
  }, [type, searchPokemon]);



  return (
    <main>
      <div>
        <Dropdown types={types} setType={setType} type={type} />
        <Search setSearchPokemon={setSearchPokemon} searchPokemon={searchPokemon} />
      </div>
      <div className='poke-container'>
        {pokemon.map((poke) => (
          <PokeCard key={poke.id} {...poke} />
        ))}
      </div>
    </main>
  );
}
