import React from 'react';
import Banner from './Banner/Banner';
import HowItWorks from './HowItWorks/HowItWorks';
import OurServices from './OurServices/OurServices';
import ClientSlider from './marquee/ClientSlider';
import Features from './Features/Features';
import BeMerchant from './beMarchant/BeMerchant';
import TestimonialCarousel from './reviewPagination/TestimonialCarousel';
import FAQAccordion from './FAQAccordion/FAQAccordion';


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <OurServices></OurServices>
      <ClientSlider></ClientSlider>
      <Features></Features>
      <BeMerchant></BeMerchant>
      <TestimonialCarousel></TestimonialCarousel>
      <FAQAccordion></FAQAccordion>
    
    </div>
  );
};

export default Home;