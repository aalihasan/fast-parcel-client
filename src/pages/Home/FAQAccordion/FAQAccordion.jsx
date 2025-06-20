import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiArrowUpRight } from 'react-icons/fi';

const initialFaqs = [
  {
    question: 'How does this posture corrector work?',
    answer:
      'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.',
  },
  {
    question: 'Is it suitable for all ages and body types?',
    answer:
      'Yes, posture correctors are designed to be adjustable and suitable for various ages and body types.',
  },
  {
    question: 'Does it really help with back pain and posture improvement?',
    answer:
      'Yes, many users experience relief from back pain and improvement in posture after consistent use.',
  },
  {
    question: 'Does it have smart features like vibration alerts?',
    answer:
      'Some models include vibration alerts to notify you when you slouch, helping you stay upright.',
  },
  {
    question: 'How will I be notified when the product is back in stock?',
    answer:
      'You can sign up for notifications via email on our product page, and we will alert you once it’s available.',
  },
];

const moreFaqs = [
  {
    question: 'Can I wear it under my clothes?',
    answer:
      'Yes, most posture correctors are discreet and designed to be worn under your clothes.',
  },
  {
    question: 'How long should I wear it daily?',
    answer:
      'Start with 15-30 minutes a day and gradually increase up to 2 hours as needed.',
  },
  {
    question: 'Is it washable?',
    answer:
      'Yes, most posture correctors are made with washable materials. Check the care label.',
  },
  {
    question: 'Is there a warranty?',
    answer: 'Yes, we offer a 1-year warranty for manufacturing defects.',
  },
  {
    question: 'Can kids use this product?',
    answer:
      'Yes, but under supervision and after consulting with a healthcare provider.',
  },
];

const FAQAccordion = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const faqsToShow = showMore ? [...initialFaqs, ...moreFaqs] : initialFaqs;

  const toggleAccordion = index => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  return (
    <div className="px-4 md:px-10 lg:px-24 py-12 bg-gray-100 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        Frequently Asked Question (FAQ)
      </h2>
      <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mb-8">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with
        ease!
      </p>

      <div className="space-y-3">
        {faqsToShow.map((faq, index) => (
          <div
            key={index}
            className={`rounded-lg border ${
              expandedIndex === index
                ? 'border-teal-400 bg-teal-50'
                : 'bg-white border-white'
            } p-4 text-left shadow-sm`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center font-medium text-gray-800"
            >
              <span>{faq.question}</span>
              {expandedIndex === index ? (
                <FiChevronUp className="text-lg" />
              ) : (
                <FiChevronDown className="text-lg" />
              )}
            </button>
            {expandedIndex === index && (
              <div className="mt-3 text-sm text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10">
        <button
          onClick={() => setShowMore(prev => !prev)}
          className="px-6 py-3 bg-lime-300 hover:bg-lime-400 text-black font-semibold rounded-md flex items-center mx-auto cursor-pointer"
        >
          {showMore ? 'Show Less' : "See More FAQ's"}
          <FiArrowUpRight className="ml-2  " />
        </button>
      </div>
    </div>
  );
};

export default FAQAccordion;
