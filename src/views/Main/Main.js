import React, { useEffect, useState } from 'react';
import PokeCard from '../../components/PokeCard/PokeCard';
import Dropdown from '../../components/Dropdown/Dropdown';
import Search from '../../components/Search/Search';
import './Main.css';
import { fetchPokemon, fetchPokemonTypes, fetchFilteredPokemon } from '../../services/Pokemon';
import SortButtons from '../../components/SortButtons/SortButtons';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [type, setType] = useState('all');
  const [searchPokemon, setSearchPokemon] = useState('');
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();
      setPokemon(data);
      const typeData = await fetchPokemonTypes();
      setTypes(typeData);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchFilteredData = async () => {
      const data = await fetchFilteredPokemon(type, searchPokemon, order);
      setPokemon(data);
    };
    fetchFilteredData();
  }, [type, searchPokemon, order]);

  if (loading) return <span className="loader">Load&nbsp;ng</span>;

  return (
    <main>
      <div>
        <Dropdown types={types} setType={setType} type={type} />
        <Search setSearchPokemon={setSearchPokemon} searchPokemon={searchPokemon} />
        <SortButtons order={order} setOrder={setOrder} />
      </div>
      <div className='poke-container'>
        {pokemon.map((poke) => (
          <PokeCard key={poke.id} {...poke} />
        ))}
      </div>
    </main>
  );
}
