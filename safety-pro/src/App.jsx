// import React from 'react'
import About from './components/About/About'
import CardSlider from './components/CardSlider/CardSlider'
import Clients from './components/Clients/Clients'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
// import TestSlider from './TestSlider'

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <Clients />
      <CardSlider />
      <Contact />
      <Footer />
    </div>
  )
}

export default App