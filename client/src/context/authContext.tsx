import {
    useState,
    useEffect,
    createContext,
    ReactNode,
    FC,
    useMemo,
} from "react";
import axios from "axios";
import swal from "sweetalert";
import { UserContextType } from '../utils';

type childrenProps = {
    children: ReactNode
};

export const authContext = createContext<UserContextType>({});

export const AuthProvider: FC<childrenProps> = ({ children }) => {
    const [authData, setAuthData] = useState({
        id: 0,
        role: '',
        image: '',
        iat: 0
    });

    useEffect(() => {
        const controller = new AbortController();
        const getAuthData = async () => {
            try {
                const { data } = await axios.get('/auth', { signal: controller.signal });
                setAuthData(data);
            } catch (err) {
                swal('something went wrong');
            }
        }
        getAuthData();

        return () => {
            controller.abort();
        }
    }, []);

    const passedValue = useMemo(() => ({ authData, setAuthData }), [authData]);

    return (
        <authContext.Provider value={passedValue}>
            {children}
        </authContext.Provider>
    )
}
