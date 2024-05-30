import CTA from '@/components/CTA';
import Feature from '@/components/Feature';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks';
import Overview from '@/components/Overview';
import Package from '@/components/Package';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <Hero/>
      <HowItWorks/>
      <Feature/>
      <Overview/>
      <Package/>
      <CTA/>
      <Footer/>
    </>
  );
}

export default App;
