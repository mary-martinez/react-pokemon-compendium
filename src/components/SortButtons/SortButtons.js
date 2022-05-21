import React from 'react';

export default function SortButtons({ order, setOrder }) {
  // const descending = false;
  // if (ascending) {
  //   descending = false;
  // } else {
  //   descending = true;
  // }
  return (
    <div>
      <p>Sort A to Z</p>
      <div value={order} onChange={(e) => setOrder(e.target.value)}>
        <input type='radio' value={''} name='order' defaultChecked /> none
        <input type='radio' value={'asc'} name='order' /> ascending
        <input type='radio' value={'desc'} name='order' /> descending
      </div>
    </div>
  );
}
