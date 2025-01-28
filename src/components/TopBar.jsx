import React from 'react';
import { FaBell, FaHourglassHalf } from 'react-icons/fa';
import { MdPadding } from 'react-icons/md';

const TopBar = () => {
  return (
    <div style={styles.topBar}>
      <div style={styles.greetingSection}>
        <h2 style={styles.greeting}>Hello Alex</h2>
        <div className="flex items-center gap-2">
          <div
            className="flex items-center justify-center w-6 h-6 rounded-full border-2 shadow-md"
            style={styles.borderColor}
          >
            <FaHourglassHalf className="glow" size={10} />
          </div>
          <span className="text-sm font-medium glow">Per Hour Earning: 900</span>
        </div>
      </div>
      <div style={styles.iconSection}>
        <FaBell style={styles.icon} />
        <span style={styles.badge}>2</span>
      </div>
    </div>
  );
};

const styles = {
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#00f7ff',
    width: '100%',
    paddingBottom: '5px',
  },
  borderColor:
  {
    borderColor:'#05f1f9',
  },
  greetingSection: {
    display: 'flex',
    flexDirection: 'column', // Stacks the text vertically
  },
  greeting: {
    margin: 0,
    fontSize: '18px',
  },
  time: {
    fontSize: '14px',
    margin: 0,
  },
  iconSection: {
    position: 'relative',
  },
  icon: {
    fontSize: '18px',
  },
  badge: {
    position: 'absolute',
    top: '-5px',
    right: '-5px',
    backgroundColor: 'red',
    borderRadius: '50%',
    color: 'white',
    fontSize: '12px',
    width: '18px',
    height: '18px',
    textAlign: 'center',
    lineHeight: '18px',
  },
};

export default TopBar;
