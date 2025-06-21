import React from 'react';
import useAuth from '../../../hooks/UseAuth';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
      console.log(result.user);
      })
      .catch(error => {
      console.error(error);
      
    });
    
  }

  return (
    <div>
         <button onClick={handleGoogleSignIn} className="w-full flex items-center justify-center gap-2 py-2 px-4 border rounded bg-gray-100 hover:bg-gray-200 transition">
                  <FcGoogle size={20} />
                  Login with Google
                </button>
    </div>
  );
};

export default SocialLogin;