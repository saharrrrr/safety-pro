import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './CounterUp.css';

const CounterUp = () => {
  const [viewed, setViewed] = useState(false);

  const stats = [
    { label: "Completed Projects", value: 150 },
    { label: "Satisfied Clients", value: 250 },
    { label: "Success Rate (%)", value: 98 },
    { label: "Years of Experience", value: 10 },
  ];

  return (
    <div className="counter-container">
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <VisibilitySensor
            onChange={(isVisible) => {
              if (isVisible) setViewed(true);
            }}
            delayedCall
          >
            <h2 className="stat-number">
              {viewed ? <CountUp start={0} end={stat.value} duration={2.5} /> : 0}
            </h2>
          </VisibilitySensor>
          <p className="stat-label">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default CounterUp;
