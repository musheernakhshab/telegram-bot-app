// src/components/ButtonSection.jsx
import React from 'react';
import { BiFontFamily } from 'react-icons/bi';

const ButtonSection = ({ counter, onRedeem }) => {
  return (
    <div style={styles.container}>
      <div className="lable-glow flex justify-between gap-4 mb-8" style={styles.counter}>
        {counter}</div> {/* Counter */}
      <button className="glow-button rounded-lg px-8 py-2 font-bold uppercase tracking-wider"
      style={{
        height: '48px', // Match the height of the counter label
        display: 'flex', // Flex for alignment
        alignItems: 'center', // Center content vertically
        justifyContent: 'center', // Center content horizontally
      }}
       onClick={onRedeem}>Redeem</button> {/* Redeem Button */}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
    padding: '0px 20px',
  },
  counter: {
    fontSize: '18px',
    color: '#000',
    padding: '10px',
    borderRadius: '15px',
    width:'100px',
  },
  
};

export default ButtonSection;
