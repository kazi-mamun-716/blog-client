import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute = ({children }: ProtectedRouteProps) => {
    const token = useSelector((state: any) => state.auth.token);
    const location = useLocation();
  if (!token) {
    return <Navigate to='/login' state={{from: location}} replace />;
  }

  return children;
}

export default ProtectedRoute