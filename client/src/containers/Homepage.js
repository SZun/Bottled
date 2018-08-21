import React from 'react';

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
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <h1
        style={{
          color: '#FFFFFF',
          textShadow: '2px 2px 5px #000000',
          WebkitTextFillColor: 'transparent'
        }}
      >
        {`B O T T L E D`}
      </h1>
    </div>
  </div>
);

export default Homepage;
