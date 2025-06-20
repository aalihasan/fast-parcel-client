import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';
import image from '../../../assets/image/customer-top.png';

const TestimonialCarousel = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [centerIndex, setCenterIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/review.json');
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setTestimonials(data);
        setCenterIndex(0);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  const total = testimonials.length;
  const getIndex = i => (i + total) % total;

  const prev = () => {
    setCenterIndex(prev => getIndex(prev - 1));
  };

  const next = () => {
    setCenterIndex(prev => getIndex(prev + 1));
  };

  if (loading) {
    return (
      <div className="py-12 px-4 md:px-16 bg-gray-50 text-center">
        <p className="text-gray-500">Loading testimonials...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-12 px-4 md:px-16 bg-gray-50 text-center">
        <p className="text-red-500">Error loading testimonials: {error}</p>
      </div>
    );
  }

  if (total === 0) {
    return (
      <div className="py-12 px-4 md:px-16 bg-gray-50 text-center">
        <p className="text-gray-500">No testimonials available.</p>
      </div>
    );
  }

  if (total < 3) {
    return (
      <div className="py-12 px-4 md:px-16 bg-gray-50 text-center max-w-sm mx-auto">
        <div className="mb-6 flex justify-center">
          <img src={image} alt="Illustration" className="h-16" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          What our customers are saying
        </h2>
        <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto mb-10">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
        <div className="flex gap-6 justify-center">
          {testimonials.map(item => (
            <div
              key={item.id}
              className="w-full max-w-sm p-6 rounded-xl shadow-md bg-white"
            >
              <FaQuoteLeft className="text-2xl text-teal-600 mb-4" />
              <p className="text-gray-700 mb-6">{item.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-teal-900 rounded-full"></div>
                <div className="text-left">
                  <p className="font-semibold text-sm text-gray-800">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const leftIndex = getIndex(centerIndex - 1);
  const rightIndex = getIndex(centerIndex + 1);

  const cardsToShow = [
    { ...testimonials[leftIndex], position: 'left' },
    { ...testimonials[centerIndex], position: 'center' },
    { ...testimonials[rightIndex], position: 'right' },
  ];

  return (
    <div className="py-12 px-4 md:px-16 bg-gray-50 text-center max-w-5xl mx-auto">
      {/* Illustration */}
      <div className="mb-6 flex justify-center">
        <img src={image} alt="Illustration" className="h-16" />
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        What our customers are saying
      </h2>
      <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto mb-10">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with
        ease!
      </p>

      <div
        className="relative flex   items-center justify-center gap-6 overflow-visible"
        style={{ perspective: '1000px' }}
      >
        {cardsToShow.map(item => {
          const isActive = item.position === 'center';

         
          return (
            <div
              key={item.id}
              className={`bg-white rounded-xl p-2 text-justify shadow-lg transition-all duration-500 ease-in-out
                ${
                  isActive
                    ? 'scale-105 z-20 shadow-2xl'
                    : 'scale-90 opacity-40 z-10'
                }
              `}
              style={{
                flex: '0 0 30%',
                transformOrigin: 'center bottom',
                marginTop: isActive ? '-20px' : '0',
                boxShadow: isActive ? '0 10px 20px rgba(0, 0, 0, 0.2)' : 'none',
                cursor: 'pointer',
                userSelect: 'none',
              }}
            >
              <FaQuoteLeft
                className={`text-2xl mb-4 ${
                  isActive ? 'text-teal-600' : 'text-gray-400'
                }`}
              />
              <p
                className={`mb-6 ${
                  isActive ? 'text-gray-700' : 'text-gray-500'
                }`}
              >
                {item.text}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full ${
                    isActive ? 'bg-teal-900' : 'bg-gray-400'
                  }`}
                ></div>
                <div className="text-left">
                  <p
                    className={`font-semibold text-sm ${
                      isActive ? 'text-gray-800' : 'text-gray-500'
                    }`}
                  >
                    {item.name}
                  </p>
                  <p
                    className={`text-xs ${
                      isActive ? 'text-gray-500' : 'text-gray-400'
                    }`}
                  >
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="p-2 rounded-full border text-gray-700 hover:bg-gray-100"
          aria-label="Previous testimonial"
        >
          <FaArrowLeft />
        </button>

        {/* Pagination dots */}
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCenterIndex(idx)}
            className={`w-3 h-3 rounded-full mx-1 focus:outline-none ${
              idx === centerIndex ? 'bg-teal-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}

        <button
          onClick={next}
          className="p-2 rounded-full bg-lime-300 text-gray-900 hover:bg-lime-400"
          aria-label="Next testimonial"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
