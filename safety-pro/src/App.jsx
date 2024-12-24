import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Clients from './components/Clients/Clients'
import CardSlider from './components/CardSlider/CardSlider'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Partners from './components/Partners/Partners'


const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services /> 
      <Clients />
      <Partners />
      <CardSlider />
      <Contact />
      <Footer />
    </div>
  )
}

export default App