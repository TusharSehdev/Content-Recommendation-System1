// RecommendationList.js
import React from 'react';

const RecommendationList = ({ recommendations }) => {
  return (
    <div>
      <h2>Recommended Movies</h2>
      <ul>
        {recommendations.map((movieId) => (
          <li key={movieId}>{/* Fetch and display recommended movie details */}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationList;
