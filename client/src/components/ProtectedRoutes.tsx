import React, { ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/authContext';

type ProtectedRoutesChildren = ReactElement | null;

interface ProtectedRoutesProps {
  children: ProtectedRoutesChildren;
  isAdmin?: boolean;
  isPharmacy?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRoutesProps> = ({
  children,
  isAdmin,
  isPharmacy,
}) => {
  const { pathname } = useLocation();
  const {
    user: { role },
  } = useAuth();

  if (role === 'user') {
    return (
      <Navigate to="/login" replace state={{ currentLocation: pathname }} />
    );
  }

  if (isAdmin) {
    if (role !== 'admin') {
      return (
        <Navigate to="/login" replace state={{ currentLocation: pathname }} />
      );
    }
  }
  if (isPharmacy) {
    if (role !== 'pharmacy') {
      return (
        <Navigate to="/login" replace state={{ currentLocation: pathname }} />
      );
    }
  }

  return children;
};

export { ProtectedRoute };
