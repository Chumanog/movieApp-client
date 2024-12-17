import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Logout = () => {
  const { logout } = useContext(UserContext); 
  const navigate = useNavigate(); 

  useEffect(() => {
    logout(); 
    navigate('/'); 
  }, [logout, navigate]);

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  );
};

export default Logout;