import {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactElement,
  ReactChild,
} from 'react';
import axios from 'axios';

interface User {
  id: number;
  role: string;
  image: string;
}
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
}

const authContext = createContext<AuthContext | null>(null);

export const useAuth = (): any => useContext(authContext);

const useProvideAuth = (): AuthContext => {
  const [user, setUser] = useState({
    id: 0,
    role: 'user',
    image:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png',
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

      setUser({
        id: res.data.data.id,
        role: res.data.role,
        image: res.data.data.image,
      });
      if (callback) callback(null);
    } catch (err) {
      if (callback) callback(err);
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
      });
      if (callback) callback(null);
    } catch (err) {
      if (callback) callback(err);
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
      });
      if (callback) callback(null);
    } catch (err) {
      if (callback) callback(err);
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
      } catch (err) {
        setUser({
          id: 0,
          role: 'user',
          image:
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png',
        });
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
  };
};

interface ProvideAuthProps {
  children: ReactChild;
}

export const ProvideAuth = ({ children }: ProvideAuthProps): ReactElement => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};
