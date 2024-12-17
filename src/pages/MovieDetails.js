import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`https://movieapp-api-lms1.onrender.com/api/movies/${id}`);
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <h3>Director: {movie.director}</h3>
      <h4>Year: {movie.year}</h4>
      <p><strong>Description:</strong> {movie.description}</p>
      <p><strong>Genre:</strong> {movie.genre}</p>

      {/* Comments section can be added here if needed */}
      
    </div>
  );
};

export default MovieDetail;