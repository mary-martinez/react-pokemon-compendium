import React from 'react';

export default function PokeCard({ pokemon, type_1, type_2, url_image, pokedex }) {
  return (
    <div>
      <h3>{pokemon}</h3>
      <img src={url_image} />
      <p>type 1: {type_1} </p>
      <p>type 2: {type_2}</p>
      <a href={pokedex}>Learn More</a>
    </div>
  );
}
