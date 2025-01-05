import React from 'react'
import CounterUp from '../CounterUp/CounterUp'
import './Achievements.css'

function Achievements() {
  return (
    <div className='Achievement-container'>
        <h2 className='section-title'>Achievements</h2>
        <p className='section-subtitle'>We are proud of our achievements</p>
        <CounterUp />
    </div>
  )
}

export default Achievements