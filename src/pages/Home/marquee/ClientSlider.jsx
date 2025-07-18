// src/components/ClientSlider.jsx
import Marquee from 'react-fast-marquee';

import amazon from '../../../assets/brands/amazon.png';
import casio from '../../../assets/brands/casio.png';
import moonstar from '../../../assets/brands/moonstar.png';
import randstad from '../../../assets/brands/randstad.png';
import startpeople from '../../../assets/brands/start-people 1.png';
import start from '../../../assets/brands/start.png';
import amazonvector from '../../../assets/brands/amazon_vector.png';


const logos = [
  amazon,
  casio,
  moonstar,
  randstad,
  startpeople,
  start,
  amazonvector,
];
const ClientSlider = () => {
  return (
    <div className="bg-gray-200 py-10 my-10">
      <h2 className="text-center text-3xl font-bold mb-6 text-gray-800">
        We've helped thousands of sales teams
      </h2>
      <Marquee gradient={false} speed={40} pauseOnHover={true}>
        {logos.map((logo, index) => (
          <div key={index} className="mx-[100px]">
            <img
              src={logo}
              alt={`Client ${index + 1}`}
              className="h-5 w-auto object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ClientSlider;
