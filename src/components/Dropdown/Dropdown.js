import React from 'react';

export default function Dropdown({ types, setType }) {

  return (
    <div>
      <select onChange={(e) => setType(e.target.value)}>
        <option>all</option>
        {types.map((type) => (
          <option key={type} >{type}</option>
        ))}
      </select>
    </div>
  );
}
