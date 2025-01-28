// src/components/GreetingSection.jsx
import React from 'react';
import { BiFontSize } from 'react-icons/bi';
import { FaWallet, FaClock, FaHourglassHalf } from 'react-icons/fa';
import { MdPadding } from 'react-icons/md';


const GreetingSection = ({ totalValue }) => {
  return (
    <div class="mb-6">
    <div class="grid grid-cols-2 gap-4" style={styles.container}>
      <div class="balance-card p-4 rounded-lg">
        <div class="flex items-center gap-2">
          <i class="bi bi-wallet2 glow custom-icon" style={{ color: '#05f1f9' }}></i>
          <span style={{fontSize:'27px'}}>{totalValue.toLocaleString()}</span>
        </div>
      </div>
      <div class="balance-card p-4 rounded-lg">
        <div class="flex items-center gap-2">
          {/* FaHourglassHalf Icon */}
          <div
            class="flex items-center justify-center w-10 h-10 rounded-full border-2 shadow-md "
            style={styles.borderColor}
          >
            <FaHourglassHalf className="glow" size={25} style={{ color: '#05f1f9' }} />
          </div>
  
          {/* Exchange Icon */}
          <a
            href="/exchange"
            class="flex items-center justify-center w-10 h-10 rounded-full border-2 shadow-md hover:glow-effect transition" style={styles.borderColor}
          >
            <i class="bi bi-arrow-left-right glow" style={{ color: '#05f1f9' }}></i>
          </a>
  
          {/* Settings Icon */}
          <a
            href="/settings"
            class="flex items-center justify-center w-10 h-10 rounded-full border-2 shadow-md hover:glow-effect transition" style={styles.borderColor}
          >
            <i class="bi bi-gear glow" style={{ color: '#05f1f9' }}></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  

  );
};

const styles = {
  container: {
    border: '2px solid #05f1f9',
    filter: 'drop-shadow(0 0 2px var(--neon-blue))',
    borderRadius: '10px', // Rounded corners
    color : '#05f1f9',
  },
  borderColor:
  {
    borderColor:'#05f1f9',
    color: '#05f1f9',
  },
  
};

export default GreetingSection;
