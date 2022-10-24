import UserData from "./UserData";

interface UserContextType {
  authData: UserData | null;
  setAuthData: Function;
}

export default UserContextType;
