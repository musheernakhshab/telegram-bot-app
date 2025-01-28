import React, { useEffect, useState } from 'react';

const CustomClock = ({
  hourColor = '#000',
  minuteColor = '#000',
  secondColor = '#000',
  numberColor = '#000',
  circleColor = '#000',
  circleStrokeWidth = 2,
  circleRadius = 50,
}) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const getRotation = (unit, max) => (unit / max) * 360;

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        style={{ margin: '0 auto', display: 'block' }}
      >
        {/* Clock Face Circle */}
        <circle
          cx="100"
          cy="100"
          r={circleRadius}
          fill="none"
          stroke={circleColor}
          strokeWidth={circleStrokeWidth}
        />
        {/* Numbers */}
        {[...Array(12)].map((_, i) => {
          const angle = (i + 1) * 30;
          const x = 100 + (circleRadius - 15) * Math.sin((angle * Math.PI) / 180);
          const y = 100 - (circleRadius - 15) * Math.cos((angle * Math.PI) / 180);
          return (
            <text
              key={i}
              x={x}
              y={y}
              fill={numberColor}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="14"
              fontWeight="bold"
            >
              {i + 1}
            </text>
          );
        })}
        {/* Hour Hand */}
        <line
          x1="100"
          y1="100"
          x2={100 + (circleRadius - 50) * Math.sin((getRotation(hours + minutes / 60, 12) * Math.PI) / 180)}
          y2={100 - (circleRadius - 50) * Math.cos((getRotation(hours + minutes / 60, 12) * Math.PI) / 180)}
          stroke={hourColor}
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Minute Hand */}
        <line
          x1="100"
          y1="100"
          x2={100 + (circleRadius - 30) * Math.sin((getRotation(minutes + seconds / 60, 60) * Math.PI) / 180)}
          y2={100 - (circleRadius - 30) * Math.cos((getRotation(minutes + seconds / 60, 60) * Math.PI) / 180)}
          stroke={minuteColor}
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Second Hand */}
        <line
          x1="100"
          y1="100"
          x2={100 + (circleRadius - 20) * Math.sin((getRotation(seconds, 60) * Math.PI) / 180)}
          y2={100 - (circleRadius - 20) * Math.cos((getRotation(seconds, 60) * Math.PI) / 180)}
          stroke={secondColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Center Circle */}
        <circle cx="100" cy="100" r="5" fill={secondColor} />
      </svg>
    </div>
  );
};


export default CustomClock;
