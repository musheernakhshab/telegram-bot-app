import React from 'react';
import { FaHourglassHalf } from 'react-icons/fa';

const Game = () => {
  return (
    <div className='shadow-md'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        color: '#05f1f9',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          border: '10px solid #05f1f9',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
          marginBottom: '2rem',
        }}
      >
        <FaHourglassHalf size={70} style={{ color: '#05f1f9' }} />
      </div>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Comming Soon!</h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
        Get ready to embark on an exciting adventure.
      </p>
      
    </div>
  );
};

export default Game;
