import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Specialists from '../components/Specialists';
import About from '../components/About';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Specialists />
      <About />
      <Contact />
    </main>
  );
};

export default Home;
