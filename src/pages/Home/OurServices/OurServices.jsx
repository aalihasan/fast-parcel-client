
// src/components/OurServices.jsx
import {
  FaTruck,
  FaGlobeAsia,
  FaBoxOpen,
  FaHandHoldingUsd,
  FaIndustry,
  FaUndo,
} from "react-icons/fa";

const services = [
  {
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    icon: <FaTruck className="text-3xl text-teal-600" />,
    bg: "bg-white",
    hoverBg: "hover:bg-teal-100",
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    icon: <FaGlobeAsia className="text-3xl text-teal-600" />,
    bg: "bg-lime-200",
    hoverBg: "hover:bg-lime-300",
  },
  {
    title: "Fulfillment Solution",
    description:
      "We offer customized service with inventory management, order processing, packaging, and after-sales support.",
    icon: <FaBoxOpen className="text-3xl text-teal-600" />,
    bg: "bg-white",
    hoverBg: "hover:bg-teal-100",
  },
  {
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    icon: <FaHandHoldingUsd className="text-3xl text-teal-600" />,
    bg: "bg-white",
    hoverBg: "hover:bg-teal-100",
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which include warehouse and inventory management support.",
    icon: <FaIndustry className="text-3xl text-teal-600" />,
    bg: "bg-white",
    hoverBg: "hover:bg-teal-100",
  },
  {
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    icon: <FaUndo className="text-3xl text-teal-600" />,
    bg: "bg-white",
    hoverBg: "hover:bg-teal-100",
  },
];

const OurServices = () => {
  return (
    <section className="bg-[#083344] py-14 px-4 md:px-8 lg:px-20">
      <div className="text-center text-white mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
        <p className="text-sm md:text-base mt-2 max-w-2xl mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      <div
        data-aos="zoom-in"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`rounded-xl shadow-md p-6 text-center transition-all duration-300 transform hover:scale-[1.03] ${service.bg} ${service.hoverBg}`}
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
