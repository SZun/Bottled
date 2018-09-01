import React from 'react';

import './Homepage.css';

const Homepage = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    }}
  >
    <img
      src={`https://images.pexels.com/photos/8800/snow-restaurant-mountains-sky.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`}
      alt="hero pic"
    />
    <div className="header">
      <h1>{`B O T T L E D`}</h1>
    </div>
  </div>
);

export default Homepage;
