
import React from 'react'
import { Navigate } from 'react-router-dom'

import useAuth from 'hooks/useAuth'

interface ProtectedRouteProps {
  children: any;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { authenticated } = useAuth()

  if (!authenticated) {
    return <Navigate to="/" replace />
  }

  return children
}

export default ProtectedRoute
