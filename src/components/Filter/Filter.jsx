import React from 'react';

const Filter = ({ filter, changeFilter }) => {
  return (
    <form>
      <input type="text" value={filter} onChange={changeFilter} />
    </form>
  );
};

export default Filter;
