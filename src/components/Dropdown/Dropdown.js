import React from 'react';

export default function Dropdown({ types }) {

  return (
    <div>
      <select>
        <option>all</option>
        {types.map((type) => (
          <option key={type}>{type}</option>
        ))}
      </select>
    </div>
  );
}
