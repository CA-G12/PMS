import {
  useState,
  useEffect,
  createContext,
  ReactNode,
  FC,
  useMemo,
} from 'react';
import axios from 'axios';

type childrenProps = {
  children: ReactNode;
};

export const authContext = createContext({});

export const AuthProvider: FC<childrenProps> = ({ children }) => {
  const [authData, setAuthData] = useState({
    id: 0,
    role: '',
    image: '',
  });

  useEffect(() => {
    const controller = new AbortController();
    const getAuthData = async () => {
      try {
        const { data } = await axios.get('/auth', {
          signal: controller.signal,
        });
        setAuthData(data);
      } catch (err) {
        setAuthData({
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

  const passedValue = useMemo(() => ({ authData, setAuthData }), [authData]);

  return (
    <authContext.Provider value={passedValue}>{children}</authContext.Provider>
  );
};
