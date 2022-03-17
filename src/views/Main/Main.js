import React, { useEffect, useState } from 'react';
import PokeCard from '../../components/PokeCard/PokeCard';
import Dropdown from '../../components/Dropdown/Dropdown';
import './Main.css';
import { fetchPokemon, fetchPokemonTypes, fetchFilteredPokemon } from '../../services/Pokemon';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [type, setType] = useState('all');

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
      if (type === 'all') {
        const data = await fetchPokemon();
        setPokemon(data);
      } else {
        const data = await fetchFilteredPokemon(type);
        setPokemon(data);
      }
    };
    fetchFilteredData();
  }, [type]);


  return (
    <main>
      <Dropdown types={types} setType={setType} type={type} />
      <div className='poke-container'>
        {pokemon.map((poke) => (
          <PokeCard key={poke.id} {...poke} />
        ))}
      </div>
    </main>
  );
}
