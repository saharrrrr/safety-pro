
import Navbar from '../Navbar/Navbar'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
    <Navbar/>
    <div className="container">
      <div className="hero-content">
        <h1>Safety Pro </h1>
        <h2>Your Trusted Partner in Fire Safety.</h2>
        <p>
          Protecting homes, businesses, and communities from fire hazards.
        </p>
        <div className="button-group">
          <button className="btn btn-secondary">Contact Us</button>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero