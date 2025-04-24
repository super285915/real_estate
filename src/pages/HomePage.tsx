import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '../components/home/HeroSection';
import FeaturedProperties from '../components/home/FeaturedProperties';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CallToAction from '../components/home/CallToAction';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>LuxeEstates | Find Your Dream Home</title>
        <meta name="description" content="Discover your dream home with LuxeEstates. Browse our exclusive selection of premium real estate properties." />
      </Helmet>
      
      <HeroSection />
      <FeaturedProperties />
      <TestimonialsSection />
      <CallToAction />
    </>
  );
};

export default HomePage;