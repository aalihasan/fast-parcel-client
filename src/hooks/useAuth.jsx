import { useContext } from 'react';
import { AuthContext } from '../contexts/authcontexts/AuthContext';

const useAuth = () => {
  const authInfo = useContext(AuthContext);
  return authInfo;
};

export default useAuth;
