import React from 'react';
import Banner from './Banner/Banner';
import HowItWorks from './HowItWorks/HowItWorks';
import OurServices from './OurServices/OurServices';
import ClientSlider from './marquee/ClientSlider';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <OurServices></OurServices>
      <ClientSlider></ClientSlider>
    </div>
  );
};

export default Home;