import { useState } from 'react';

export default function Search({ setSearchPokemon }) {
  const [search, setSearch] = useState('');

  return (
    <div className='search-container'>
      <p>Search by Pokemon</p>
      <div className='search-bar'>
        <input onChange={(e) => setSearch(e.target.value)}></input>
        <button onClick={() => setSearchPokemon(search)}>Search</button>
      </div>
    </div>
  );
}
