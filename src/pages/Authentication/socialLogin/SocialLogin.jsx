import React from 'react';
import useAuth from '../../../hooks/UseAuth';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate, useLocation } from 'react-router';
import { toast } from 'react-hot-toast';

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect back to previous page or home if no redirect info
  const from = location.state?.from?.pathname || '/';

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        toast.success('Login successful!');
        navigate(from, { replace: true });
      })
      .catch(error => {
        toast.error('Login failed: ' + error.message);
      });
  };

  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="w-full flex items-center justify-center gap-2 py-2 px-4 border rounded bg-gray-100 hover:bg-gray-200 transition"
      >
        <FcGoogle size={20} />
        Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
