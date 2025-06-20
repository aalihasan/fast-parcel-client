import { Link } from 'react-router';
import trackingImg from '../../../assets/vector/livetrack.png';
import deliveryImg from '../../../assets/vector/image1.png';
import supportImg from '../../../assets/vector/call_center.png';

const Features = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Live Parcel Tracking */}
        <div
          data-aos="fade-right"
          className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md gap-6"
        >
          <img src={trackingImg} alt="Live Tracking" className="w-24 md:w-32" />
          <div>
            <h3 className="text-xl font-semibold mb-1">Live Parcel Tracking</h3>
            <p className="text-gray-600">
              Stay updated in real-time with our live parcel tracking feature.
              From pick-up to delivery, monitor your shipment’s journey and get
              instant status updates for complete peace of mind.
            </p>
          </div>
        </div>

        {/* 100% Safe Delivery */}
        <div
          data-aos="fade-left"
          className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md gap-6"
        >
          <img src={deliveryImg} alt="Safe Delivery" className="w-24 md:w-32" />
          <div>
            <h3 className="text-xl font-semibold mb-1">100% Safe Delivery</h3>
            <p className="text-gray-600">
              We ensure your parcels are handled with the utmost care and
              delivered securely to their destination. Our reliable process
              guarantees safe and damage-free delivery every time.
            </p>
          </div>
        </div>

        {/* 24/7 Call Center Support */}
        <div
          data-aos="fade-left"
          className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md gap-6"
        >
          <img src={supportImg} alt="Support" className="w-24 md:w-32" />
          <div>
            <h3 className="text-xl font-semibold mb-1">
              24/7 Call Center Support
            </h3>
            <p className="text-gray-600">
              Our dedicated support team is available around the clock to assist
              you with any questions, updates, or delivery concerns—anytime you
              need us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
