import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();

  const [error, setError] = useState('');

  const { isPending, data: parcelInfo = {} } = useQuery({
    queryKey: ['parcels', parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  if (isPending) {
    return '...loading';
  }
  console.log(parcelInfo);

  const amount = parcelInfo.cost;

  const handlesubmit = async e => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (!card) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    if (error) {
      setError(error.message);
    } else {
      setError('');
      console.log('payment method', paymentMethod);
    }
  };
  return (
    <div>
      <h1 className="text-center font-bold py-4">Payment Gateway</h1>

      <form
        onSubmit={handlesubmit}
        className="space-y-4 bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto"
      >
        <CardElement className="p-2 border rounded"></CardElement>
        <button
          className="btn btn-primary w-full"
          type="submit"
          disabled={!stripe}
        >
        Pay ৳ {amount}
        </button>
        {error && <p className="text-red-400">{error}</p>}
      </form>
    </div>
  );
};

export default PaymentForm;
