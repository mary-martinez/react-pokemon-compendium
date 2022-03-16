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

export async function fetchFilteredPokemon(type) {
  const params = new URLSearchParams();
  params.set('type', type);
  const resp = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`);
  const data = await resp.json();
  return (data.results);
}