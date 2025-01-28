// src/components/ClockSection.jsx
import React from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

const ClockSection = () => {
  const [value, setValue] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <Clock
        value={value}
        renderNumbers={true} // Enables numbers on the clock
        hourHandWidth={5}
        minuteHandWidth={3}
        secondHandWidth={1}
        className="custom-clock" // Add a custom class for styling
      />
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    margin: '0 auto',
  },
};

export default ClockSection;
