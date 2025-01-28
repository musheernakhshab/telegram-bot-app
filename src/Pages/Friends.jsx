import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faGift, faHourglassHalf, faUser } from "@fortawesome/free-solid-svg-icons";
import { FaHourglassHalf } from "react-icons/fa";

const Friends = () => {
  const friends = [
    { id: 1, name: "AmitKumar", reward: "+1000" },
    { id: 2, name: "Cathrin", reward: "+1000" },
    { id: 3, name: "Cathrin", reward: "+1000" },
  ];

  return (
    <div style={styles.container}>
      {/* Main Section */}
      <div style={styles.main}>
        <div style={styles.coinCircle}>
          <FontAwesomeIcon icon={faHourglassHalf} size="3x" color="#05f1f9" />
        </div>
        <div style={styles.card}>
          <FontAwesomeIcon icon={faGift} size="3x" color="#05f1f9" />
          <div
        style={{
          display: "flex",
          alignItems: "center",
          color: "#05f1f9",
          marginBottom: "10px",
        }}
      >
        <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 shadow-md" style={styles.borderColor}>
            <FaHourglassHalf />
        </div>
        <div style={{ color: "#05f1f9" }}>
          <div style={{ fontWeight: "bold", fontSize: "11px" }}> +1000 Time for you and your friend</div>
        </div>
      </div>
      <button className="glow-button rounded-lg px-8 py-2 font-bold uppercase tracking-wider"
      style={{
        height: '36px', // Match the height of the counter label
        display: 'flex', // Flex for alignment
        alignItems: 'center', // Center content vertically
        justifyContent: 'center', // Center content horizontally
        width:'100%',
      }}>INVITE FRIEND</button>
        </div>
        
      </div>

      {/* Friends List */}
      <h2>Total Friends: {friends.length}</h2>
      {friends.map((friend) => (
        <div key={friend.id} style={styles.friendRow}>
          <FontAwesomeIcon icon={faUser} size="1g" color="#05f1f9" />
          <span>{friend.name}</span>
          <span style={styles.reward}>{friend.reward}</span>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    color: "#fff",
    padding: "20px",
    minHeight: "100vh",
  },
  main: {
    textAlign: "center",
  },
  borderColor:
  {
    borderColor:'#05f1f9',
  },
  coinCircle: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: '7px solid #05f1f9',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
    margin: "0 auto 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: "17px",
    fontWeight: "bold",
    color: "#05f1f9",
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
  },
  subtitle: {
    color: "#05f1f9",
    fontSize: "15px",
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
  },
  card: {
    backgroundColor: "#022a4b",
    padding: "20px",
    borderRadius: "10px",
    margin: "20px auto",
    maxWidth: "300px",
    fontSize:"11px",
  },
  reward: {
    color: "#05f1f9",
  },
  friendRow: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#022a4b",
    padding: "10px",
    borderRadius: "5px",
    margin: "10px 0",
    textAlign: "left",
  },
};

export default Friends;
