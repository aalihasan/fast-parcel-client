import React from 'react';
import { useForm } from 'react-hook-form';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-hot-toast';
import SocialLogin from '../socialLogin/SocialLogin';
import useAuth from '../../../hooks/UseAuth';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const onSubmit = data => {
    const { email, password } = data;

    signIn(email, password)
      .then(() => {
        toast.success('Login successful!');
        navigate(from, { replace: true });
      })
      .catch(error => {
        toast.error('Login failed: ' + error.message);
      });
  };

  return (
    <div>
      <div className="flex-1 items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-6">
          {/* Heading */}
          <div className="text-left">
            <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
          </div>

          {/* Icon */}
          <div className="flex items-center gap-2 text-5xl text-gray-400">
            <FaUserCircle size={20} />
            <p className="text-sm text-gray-600">Login with Fast Parcel</p>
          </div>

          {/* Form */}
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
                <p className="text-red-500 text-sm mt-1">
                  Password is required
                </p>
              )}
              {errors.password?.type === 'minLength' && (
                <p className="text-red-500 text-sm mt-1">
                  Password must be at least 6 characters
                </p>
              )}
            </div>

            <p className="underline text-sm text-gray-500 cursor-pointer">
              Forgot Password?
            </p>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-lime-400 text-white font-semibold rounded hover:bg-lime-500 transition"
            >
              Login
            </button>
          </form>

          {/* Register link */}
          <div className="text-sm text-center">
            Don't have any account?{' '}
            <Link to="/register" className="text-lime-600 hover:underline">
              Register
            </Link>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <hr className="flex-grow border-gray-300" />
            <span className="text-sm">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google login */}
          <SocialLogin from={from} />
        </div>
      </div>
    </div>
  );
};

export default Login;
