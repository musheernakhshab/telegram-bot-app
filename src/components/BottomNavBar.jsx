import React from 'react';
import { FaHome, FaGamepad, FaUser, FaTasks } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const BottomNavBar = () => {
  return (
    <div style={styles.container}>
      <div style={styles.navBar}>
        {/* Use Link to navigate to different pages */}
        <Link to="/" style={styles.link}>
          <FaHome style={styles.icon} />
        </Link>
        <Link to="/game" style={styles.link}>
          <FaGamepad style={styles.icon} />
        </Link>
        <Link to="/friends" style={styles.link}>
          <FaUser style={styles.icon} />
        </Link>
        <Link to="/task" style={styles.link}>
          <FaTasks style={styles.icon} />
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '90%',
    maxWidth: '390px',
    backgroundColor: '#001A2E',
    borderRadius: '20px 20px 10px 10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
  },
  navBar: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '15px 0',
  },
  icon: {
    fontSize: '24px',
    color: '#00f7ff',
    cursor: 'pointer',
    filter: 'drop-shadow(0 0 2px #00f7ff)',
  },
  link: {
    textDecoration: 'none',
  },
};

export default BottomNavBar;
