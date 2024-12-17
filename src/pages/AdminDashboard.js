import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://movieapp-api-lms1.onrender.com/api/movies');
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError("Failed to fetch movies.");
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>

      {error && <div className="alert alert-danger">{error}</div>} {/* Show error message if any */}

      <h2>All Movies</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Director</th>
            <th>Year</th>
            <th>Description</th>
            <th>Genre</th>
            <th>Actions</th> {/* Placeholder for action buttons (edit/delete) */}
          </tr>
        </thead>
        <tbody>
          {movies.length > 0 ? (
            movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.director}</td>
                <td>{movie.year}</td>
                <td>{movie.description}</td>
                <td>{movie.genre}</td>
                <td>
                  {/* Placeholder for action buttons */}
                  {/* You can add edit and delete functionality here */}
                  <button className="btn btn-warning btn-sm">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">No movies available.</td> {/* Message when no movies are found */}
            </tr>
          )}
        </tbody>
      </table>

    </div>
  );
};

export default AdminDashboard;