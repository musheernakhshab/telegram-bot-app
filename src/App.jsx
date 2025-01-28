import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import GreetingSection from './components/GreetingSection';
import ButtonSection from './components/ButtonSection';
import BottomNavBar from './components/BottomNavBar';
import CustomClock from './components/CustomClock';
import Game from './Pages/Game'; // Import Game Page
import Friends from './Pages/Friends'; // Import Friends Page
import Task from './Pages/Task'; // Import Task Page
import Home from './Pages/Home'; // Import Home Page

const App = () => {
  const [counter, setCounter] = useState(0); // Counter value
  const [totalValue, setTotalValue] = useState(0); // Initial wallet value

  // Increment the counter every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => (prev < 3600 ? prev + 1 : 3600)); // Stops at 3600
    }, 4000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  // Handle Redeem Button
  const handleRedeem = () => {
    setTotalValue((prev) => prev + counter); // Add counter to the wallet value
    setCounter(0); // Reset counter to 0
  };

  return (
    <Router>
      <div className="background-image mx-auto max-w-md">
        <Routes>
          {/* Define routes for each page */}
          <Route
            path="/"
            element={
              <div>
                <TopBar />
                <GreetingSection totalValue={totalValue} />
                <CustomClock
                  hourColor="#05f1f9" // Green hour hand
                  minuteColor="#05f1f9" // Blue minute hand
                  secondColor="#05f1f9" // Red second hand
                  numberColor="#05f1f9" // Orange numbers
                  circleColor="#05f1f9" // Purple circle
                  circleStrokeWidth={6} // Stroke width of the circle
                  circleRadius={90} // Radius of the circle
                />
                <ButtonSection counter={counter} onRedeem={handleRedeem} />
              </div>
            }
          />
          <Route path="/game" element={<Game />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/task" element={<Task />} />
        </Routes>
        <BottomNavBar />
      </div>
    </Router>
  );
};

export default App;
