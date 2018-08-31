import React from 'react';
import image from '../assets/media/bottle1.jpg';
const Homepage = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    }}
  >
    <img src={image} alt="hero pic" />
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
          textShadow: '2px 2px 5px darkgoldenrod',
          WebkitTextFillColor: 'transparent',
          paddingBottom: '100%'
        }}
      >
        {`B O T T L E D`}
      </h1>
    </div>
  </div>
);

export default Homepage;
