// MovieList.js
import React from 'react';

const MovieList = ({ movies, onMovieSelect }) => {
  const handleClick = (movie) => {
    onMovieSelect(movie);
  };

  return (
    <div>
      <h2>All Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} onClick={() => handleClick(movie)}>
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
