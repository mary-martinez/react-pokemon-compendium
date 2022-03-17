export async function fetchPokemon() {
  const resp = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex`);
  const data = await resp.json();
  return (data.results);
}

export async function fetchPokemonTypes() {
  const resp = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex/types`);
  const data = await resp.json();
  const types = data.map((item) => item.type);
  return (types);
}

export async function fetchFilteredPokemon(type, searchPokemon) {
  const params = new URLSearchParams();
  params.set('perPage', '10');
  if (type !== 'all') {
    params.set('type', type);
  }
  if (searchPokemon) {
    params.set('pokemon', searchPokemon);
  }
  const resp = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`);
  const data = await resp.json();
  return (data.results);
}