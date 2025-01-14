import React from "react";
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Clients from './components/Clients/Clients';
import Partners from './components/Partners/Partners';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <Achievements />
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="clients">
        <Clients />
      </section>
      <section id="partners">
        <Partners />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
