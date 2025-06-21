import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/UseAuth';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router';
import { FcGoogle } from 'react-icons/fc';



const Register = () => {
const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {createUser } = useAuth();


  const onSubmit = data => {

    createUser(data.email, data.password)
      .then(result => {
      console.log(result.user);
      })
      .catch(error => {
      console.error(error);
    })
  
  };

  return (
    <div className="flex-1 items-center justify-center p-8 bg-white">
      <div className="w-full max-w-md space-y-6">
        {/* Logo */}
        <div className="text-left">
          <h2 className="text-3xl font-bold text-gray-900">
            Create an Account
          </h2>
        </div>

        {/* Icon */}
        <div className="flex items-center gap-2 text-5xl text-gray-400">
          <FaUserCircle size={20} />{' '}
          <p className="text-sm text-gray-600">Register with Fast Parcel</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register('email', { required: true })}
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lime-400"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">Email is required</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              {...register('password', {
                required: true,
                minLength: 6,
              })}
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lime-400"
              placeholder="Password"
            />
            {errors.password?.type === 'required' && (
              <p className="text-red-500 text-sm mt-1">Password is required</p>
            )}
            {errors.password?.type === 'minLength' && (
              <p className="text-red-500 text-sm mt-1">
                Password must be at least 6 characters
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-lime-400 text-white font-semibold rounded hover:bg-lime-500 transition"
          >
            Register
          </button>
        </form>

        <div className="text-sm text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-lime-600 hover:underline">
            Login
          </Link>
        </div>

        <div className="flex items-center justify-center gap-2 text-gray-500">
          <hr className="flex-grow border-gray-300" />
          <span className="text-sm">Or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button className="w-full flex items-center justify-center gap-2 py-2 px-4 border rounded bg-gray-100 hover:bg-gray-200 transition">
          <FcGoogle size={20} />
          Register with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
