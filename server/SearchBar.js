import React from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search by order ID"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      ></input>
      </form>
      )
  }