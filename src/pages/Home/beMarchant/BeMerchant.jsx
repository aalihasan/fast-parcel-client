// src/components/CourierBanner.jsx
import { Link } from 'react-router';
import courierImage from '../../../assets/image/location-merchant.png';
import bgImage from '../../../assets/image/be-a-merchant-bg.png'; // ✅ make sure this path is correct

const BeMerchant = () => {
  return (
    <div
      data-aos="zoom-in-up"
      className="text-white py-10 px-6 md:px-16 rounded-xl overflow-hidden bg-[#022C3A]"
      style={{
        backgroundColor: '#022C3A',
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
      }}
    >
      <div className=" p-6 md:p-10 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Merchant and Customer Satisfaction <br /> is Our First Priority
          </h2>
          <p className="text-sm md:text-base text-gray-300">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Profast courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/become-merchant"
              className="bg-lime-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-lime-500 transition"
            >
              Become a Merchant
            </Link>
            <Link
              to="/earn-courier"
              className="border border-lime-400 text-lime-400 px-5 py-2 rounded-full font-semibold hover:bg-lime-500 hover:text-black transition"
            >
              Earn with Profast Courier
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src={courierImage}
            alt="Courier Service"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default BeMerchant;
