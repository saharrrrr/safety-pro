import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Clients from './components/Clients/Clients'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Partners from './components/Partners/Partners'
import './App.css'
import CounterUp from './components/CounterUp/CounterUp'



const App = () => {

  
  return (
    <div>
        <Hero />
      <section id="about" >
        <CounterUp />
        <About />
      </section>
      <section id="services" >
        <Services /> 
      </section>
      <section id="clients" >
        <Clients />
      </section>
      <section id="partners" >
        <Partners />
      </section>
      <section id="contact" >
        <Contact />
      </section>
      <Footer />
    </div>
  )
}


export default App