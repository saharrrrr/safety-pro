import React from 'react'
import './Clients.css'

import image1 from './logos/justice.png'
import image2 from './logos/aramco.png'
import image3 from './logos/water.jpg'
import image4 from './logos/noura.png'
import image5 from './logos/labor.png'
import image6 from './logos/total.png'
import image7 from './logos/sports.png'
import image8 from './logos/obied.jpg'
import image9 from './logos/spacetoon.png'
import image10 from './logos/lulu.png'
import image11 from './logos/tamimi.png'
import image12 from './logos/spacetoon.png' 
import image13 from './logos/saud.jpg'
import image14 from './logos/tejoury.png'
import image15 from './logos/saudi.jpg'
import image16 from './logos/rabiah.jpg'
import image17 from './logos/petromin.png'
import image18 from './logos/yamamah.jpg'
import image19 from './logos/almunif.png'
import image20 from './logos/jazera.jpg'
import image21 from './logos/tawuniya.png'
import image22 from './logos/golds.png'
import image23 from './logos/lg.png'
import image24 from './logos/panda.png'
import image25 from './logos/araibian.png'
import image26 from './logos/nadeg.png'
import image27 from './logos/fanar.png'
import image28 from './logos/enoc.png'
import image29 from './logos/art.jpg'
import image30 from './logos/chemical.png'
import image31 from './logos/java.png'
import image32 from './logos/pepsi.png'
import image33 from './logos/ama.png'
import image34 from './logos/dariea-01.png'


const Clients = () => {
    const clients = [
        {id : 1,
        image: image1
        },
        {id : 2,
        image: image2
        },
        {id : 3,
        image: image3
        },
        {id : 4,
        image: image4
        },
        {id : 5,
        image: image5
        },
        {id : 6,
        image: image6
        },
        {id : 7,
        image: image7
        },
        {id : 8,
        image: image8
        },
        {id : 9,
        image: image9
        },
        {id : 10,
        image: image10
        },
        {id : 11,
        image: image11
        },
        {id : 12,
        image: image12
        },
        {id : 13,
        image: image13
        },
        {id : 14,
        image: image14
        },
        {id : 15,
        image: image15
        },
        {id : 16,
        image: image16
        },
        {id : 17,
        image: image17
        },
        {id : 18,
        image: image18
        },
        {id : 19,
        image: image19
        },
        {id : 20,
        image: image20
        },
        {id : 21,
        image: image21
        },
        {id : 22,
        image: image22
        },
        {id : 23,
        image: image23
        },
        {id : 24,
        image: image24
        },
        {id : 25,
        image: image25
        },
        {id : 26,

        image: image26
        },
        {id : 27,
        image: image27
        },
        {id : 28,
        image: image28
        },
        {id : 29,
        image: image29
        },
        {id : 30,
        image: image30
        },
        {id : 31,
        image: image31
        },
        {id : 32,
        image: image32
        },
        {id : 33,
        image: image33
        },
        {id : 34,
        image: image34
        },
    ];

  return (
    <div className='container'>
        <header className="header">Our Clients</header>
        <div className="clients-container">
            {clients.map((client) => (
                <div className="clients-logo" key={client.id}>
                    <img src={client.image} alt="client logo"/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Clients