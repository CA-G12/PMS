import React from 'react';
import UserData from './UserData';

interface UserContextType {
  authData: UserData | null;
  setAuthData: React.Dispatch<React.SetStateAction<UserData>>;
}

export default UserContextType;
