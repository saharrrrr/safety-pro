import React from 'react'
import './Partners.css'

import partner1 from './logos/partner-01.png'
import partner2 from './logos/partner-02.png'
import partner3 from './logos/partner-03.jpg'
import partner4 from './logos/partner-04.jpg'
import partner5 from './logos/partner-05.jpg'
import partner6 from './logos/partner-06.png'
import partner7 from './logos/partner-7.png'
import partner8 from './logos/partner-08.png'
import partner9 from './logos/partner-9.png'
import partner10 from './logos/partner-10.png'
import partner11 from './logos/partner-11.jpg'
import partner12 from './logos/partner-12.png'
import partner13 from './logos/partner-13.jpg'
import partner14 from './logos/partner-14.png'
import partner15 from './logos/partner-15.png'
import partner16 from './logos/partner-16.png'
import partner17 from './logos/partner-17.png'
import partner18 from './logos/partner-18.jpg'
import partner19 from './logos/partner-19.png'
import partner20 from './logos/partner-20.png'
import partner21 from './logos/partner-21.png'
import partner22 from './logos/partner-22.png'
import partner23 from './logos/partner-23.jpg'
import partner24 from './logos/partner-24.png'
import partner25 from './logos/partner-25.png'
import partner26 from './logos/partner-26.png'
import partner27 from './logos/partner-27.png'
import partner28 from './logos/partner-28.png'
import partner29 from './logos/partner-29.png'
import partner30 from './logos/partner-30.png'
import partner31 from './logos/partner-31.png'

function Partners() {
    const partnersData = [
        {id: 1, image: partner1},
        {id: 2, image: partner2},
        {id: 3, image: partner3},
        {id: 4, image: partner4},
        {id: 5, image: partner5},
        {id: 6, image: partner6},
        {id: 7, image: partner7},
        {id: 8, image: partner8},
        {id: 9, image: partner9},
        {id: 10, image: partner10},
        {id: 11, image: partner11},
        {id: 12, image: partner12},
        {id: 13, image: partner13},
        {id: 14, image: partner14},
        {id: 15, image: partner15},
        {id: 16, image: partner16},
        {id: 17, image: partner17},
        {id: 18, image: partner18},
        {id: 19, image: partner19},
        {id: 20, image: partner20},
        {id: 21, image: partner21},
        {id: 22, image: partner22},
        {id: 23, image: partner23},
        {id: 24, image: partner24},
        {id: 25, image: partner25},
        {id: 26, image: partner26},
        {id: 27, image: partner27},
        {id: 28, image: partner28},
        {id: 29, image: partner29},
        {id: 30, image: partner30},
        {id: 31, image: partner31},
    ]
  return (
    <div className='partners'>
        <h1 className='header'>Our Partners</h1>
        <div className='partners-container'>
            {partnersData.map(partner => (
                <img key={partner.id} src={partner.image} alt='partner' className='partner-image' />
            ))}
        </div>
    </div>
  )
}

export default Partners