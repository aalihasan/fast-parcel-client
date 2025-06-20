// src/components/HowItWorks.jsx
import {
  FaShippingFast,
  FaMoneyBillWave,
  FaWarehouse,
  FaBuilding,
} from 'react-icons/fa';

const services = [
  {
    title: 'Booking Pick & Drop',
    description:
      'Easily schedule your packages for pickup and delivery at your convenience.',
    icon: <FaShippingFast />,
  },
  {
    title: 'Cash On Delivery',
    description:
      'Customers can pay upon delivery, ensuring secure and flexible transactions.',
    icon: <FaMoneyBillWave />,
  },
  {
    title: 'Delivery Hub',
    description:
      'Drop off and pick up your packages from our nearby delivery hubs.',
    icon: <FaWarehouse />,
  },
  {
    title: 'Booking SME & Corporate',
    description:
      'Tailored logistics services for businesses, SMEs, and corporate clients.',
    icon: <FaBuilding />,
  },
];

const HowItWorks = () => {
  return (
    <div className=" py-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10">
        How it Works
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-all duration-300"
          >
            <div className="text-teal-800 text-4xl mb-4 mx-auto">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
