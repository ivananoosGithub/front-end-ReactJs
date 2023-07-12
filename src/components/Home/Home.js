import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "../../App.css";

const Home = () => {
  const [territories, setTerritories] = useState([]);
  const [activeIds, setActiveIds] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    
        // Check if the user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      if (!isLoggedIn) {
          navigate('/account/login', { replace: true });
      }

    fetch("http://localhost:8082/home/index")
      .then((response) => response.json())
      .then((data) => {
        setTerritories(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [navigate]);

  const handleCaretClick = (id) => {
    setActiveIds((ids) =>
      ids.includes(id) ? ids.filter((i) => i !== id) : [...ids, id]
    );
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/account/login');
  };

  const renderTerritories = (territories) => (
    <ul>
      {territories.map((territory) => (
        <li key={territory.id}>
          <span
            className={`caret ${activeIds.includes(territory.id) ? 'caret-down' : ''}`}
            onClick={() => handleCaretClick(territory.id)}
          >
            {territory.name}
          </span>
          {territory.children && (
            <ul className={`nested ${activeIds.includes(territory.id) ? 'active' : ''}`}>
              {renderTerritories(territory.children)}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="login-container">
      <h2>Territories</h2>
      <p>Here are the list of territories</p>
      {renderTerritories(territories)}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
