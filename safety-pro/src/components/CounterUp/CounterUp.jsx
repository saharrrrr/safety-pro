import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingShield, faUsers, faCheckCircle, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './CounterUp.css';

const CounterUp = () => {
  const [viewed, setViewed] = useState(false);

  const stats = [
    { label: "Completed Projects", value: 150, icon: <FontAwesomeIcon icon={faBuildingShield} style={{ color: "#ff5b3b" }} /> },
    { label: "Satisfied Clients", value: 250, icon: <FontAwesomeIcon icon={faUsers} style={{ color: "#ff5b3b" }} /> },
    { label: "Success Rate (%)", value: 98, icon: <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#ff5b3b" }} /> },
    { label: "Years of Experience", value: 10, icon: <FontAwesomeIcon icon={faCalendarAlt} style={{ color: "#ff5b3b" }} /> },
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
            <div>
              <div className="stat-icon">{stat.icon}</div>
              <h2 className="stat-number">
                {viewed ? <CountUp start={0} end={stat.value} duration={2.5} suffix="+" /> : 0}
              </h2>
              <p className="stat-label">{stat.label}</p>
            </div>
          </VisibilitySensor>
        </div>
      ))}
    </div>
  );
};

export default CounterUp;
