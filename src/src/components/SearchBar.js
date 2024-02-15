// SearchBar.js
import React from 'react';

const SearchBar = ({ movies, onMovieSelect }) => {
  const handleSelectChange = (e) => {
    const selectedMovie = movies.find((movie) => movie.id === e.target.value);
    onMovieSelect(selectedMovie);
  };

  return (
    <div>
      <label>Select a Movie:</label>
      <select onChange={handleSelectChange}>
        <option value="">Choose a Movie</option>
        {movies.map((movie) => (
          <option key={movie.id} value={movie.id}>
            {movie.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchBar;
