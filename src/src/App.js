// App.js
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import RecommendationList from './components/RecommendationList';
import { parse } from 'papaparse';
import { getRecommendations } from './services/awsService';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/movies.csv'); // Update the path to your CSV file
      const csvData = await response.text();
      const parsedData = parse(csvData, { header: true });
      setMovies(parsedData.data);
    };

    fetchData();
  }, []);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
    getRecommendations(movie.id)
      .then((recIds) => setRecommendations(recIds))
      .catch((error) => console.error('Error fetching recommendations:', error));
  };

  return (
    <div>
      <SearchBar movies={movies} onMovieSelect={handleMovieSelect} />
      <MovieList movies={movies} onMovieSelect={handleMovieSelect} />
      {selectedMovie && <RecommendationList recommendations={recommendations} />}
    </div>
  );
}

export default App;
