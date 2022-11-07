import {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactElement,
  ReactChild,
} from 'react';
import axios from 'axios';
import { Box, CircularProgress } from '@mui/material';

interface User {
  id: number;
  role: string;
  image: string;
}
/* eslint-disable camelcase */
type SignupData = {
  owner_name: string;
  owner_id: number;
  name: string;
  license_number: number;
  location: string;
  phone: number;
  email: string;
  password: string;
  confirmPassword: string;
};
export interface AuthContext {
  user: User;
  login: Function;
  logout: Function;
  signup: Function;
  loading: boolean;
}

const authContext = createContext<AuthContext | null>(null);

export const useAuth = (): any => useContext(authContext);

const useProvideAuth = (): AuthContext => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    id: 0,
    role: 'user',
    image:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png',
    status: '',
  });

  const login = async (
    email: string,
    password: string,
    callback: any = null
  ): Promise<any> => {
    try {
      const res = await axios.post('/auth/login', {
        email,
        password,
      });
      console.log('res: ', res);

      setUser({
        id: res.data.data.id,
        role: res.data.role,
        image: res.data.data.image,
        status: res.data.data.status,
      });
      setLoading(false);
      console.log('role: ', user);
      if (callback) callback(null);
    } catch (err) {
      if (callback) callback(err);
      setLoading(false);
    }
  };

  const signup = async (
    signupData: SignupData,
    callback: any = null
  ): Promise<any> => {
    try {
      const res = await axios.post('/auth/signup', signupData);
      setUser({
        id: res.data.data.id,
        role: res.data.role,
        image: res.data.data.image,
        status: res.data.data.status,
      });
      setLoading(false);
      if (callback) callback(null);
    } catch (err) {
      if (callback) callback(err);
      setLoading(false);
    }
  };

  const logout = async (callback: any = null): Promise<any> => {
    try {
      await axios.post('/logout');

      setUser({
        id: 0,
        role: 'user',
        image:
          'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png',
        status: '',
      });
      setLoading(false);
      if (callback) callback(null);
    } catch (err) {
      if (callback) callback(err);
      setLoading(false);
    }
  };
  useEffect(() => {
    const controller = new AbortController();
    const getAuthData = async () => {
      try {
        const { data } = await axios.get('/auth', {
          signal: controller.signal,
        });
        setUser(data);
        setLoading(false);
      } catch (err) {
        setUser({
          id: 0,
          role: 'user',
          image:
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png',
          status: '',
        });
        setLoading(false);
      }
    };
    getAuthData();

    return () => {
      controller.abort();
    };
  }, []);

  return {
    user,
    login,
    signup,
    logout,
    loading,
  };
};

interface ProvideAuthProps {
  children: ReactChild;
}

export const ProvideAuth = ({ children }: ProvideAuthProps): ReactElement => {
  const auth = useProvideAuth();
  console.log('auth: ', auth.loading);
  if (auth.loading) {
    return (
      <Box sx={{ display: 'flex', margin: '20rem 30rem' }}>
        <CircularProgress />
      </Box>
    );
  }
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};
