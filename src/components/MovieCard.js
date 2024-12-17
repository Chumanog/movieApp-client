import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="card" style={{ width: '18rem', margin: '10px' }}>
      <img src={movie.posterUrl} className="card-img-top" alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.description}</p>
        <Link to={`/movies/${movie._id}`} className="btn btn-primary">View Details</Link>
      </div>
    </div>
  );
};

export default MovieCard;