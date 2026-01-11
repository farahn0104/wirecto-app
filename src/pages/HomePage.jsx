// src/pages/Home.jsx
import React, { useEffect } from 'react';
import HeroCarousel from '../components/Home/HeroCarousel';
import Facts from '../components/Home/Facts';
import AboutSection from '../components/Home/AboutSection';
import Features from '../components/Home/Features';
import Services from '../components/Home/Services';
import QuoteSection from '../components/Home/QuoteSection';
import Testimonials from '../components/Home/Testimonials';
import Team from '../components/Home/Team';
import Blog from '../components/Home/Blog';
import Vendors from '../components/Home/Vendors';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <HeroCarousel />
      <Facts />
      <AboutSection />
      <Features />
      <Services />
      <QuoteSection />
      <Testimonials />
      <Team />
      <Blog />
      <Vendors />
    </>
  );
};

export default Home;