import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import MovieList from './pages/MovieList';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout'; 
import MovieDetails from './pages/MovieDetails'; 
import AdminDashboard from './pages/AdminDashboard'; 
import AddMovie from './pages/AddMovie'; 
import { UserContext } from './context/UserContext';

const App = () => {
  const { user } = useContext(UserContext);
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/movies/:id" element={<MovieDetails />} />

          {/* Admin Routes */}
          {user && user.role === 'admin' ? (
            <>
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/addMovie" element={<AddMovie />} />
            </>
          ) : (
            <>
              {/* Redirect if not an admin */}
              <Route path="/admin" element={<Navigate to="/" replace />} />
              <Route path="/addMovie" element={<Navigate to="/" replace />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;