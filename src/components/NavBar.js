import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Movie Catalog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* Align items to the right */}
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
            {!user && (
              <>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              </>
            )}
            {user && user.role === 'admin' && (
              <>
                <Nav.Link as={Link} to="/admin">Admin Dashboard</Nav.Link>
                <Nav.Link as={Link} to="/addMovie">Add Movie</Nav.Link>
              </>
            )}
            {user && (
              <Nav.Link onClick={logout} as={Link} to="/logout">Logout</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;