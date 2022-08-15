import React from 'react'
import { useNavigate } from 'react-router'

import { getLastUser, isAuthenticated, registeredEmail, registerUser, removeAuthentication, removeLastUser, setAuthentication, setLastUser, userLogin } from 'api/api'
import { BUSINESS_DETAILS, LOGIN, REGISTER, ROOT } from 'constants/route-constants'

const defaultValue = {
  email: undefined,
  authenticated: false,
  newUser: () => {},
  checkEmail: () => {},
  register: () => {},
  onLogin: () => {},
  onLogout: () => {}
}

interface AuthContextValue {
  email: string | undefined;
  authenticated: boolean;
  newUser: any;
  checkEmail: any;
  register: any;
  onLogin: any;
  onLogout: any;
}

interface AuthProps {
  children: any;
}

export const AuthContext = React.createContext<AuthContextValue>(defaultValue)

export const AuthProvider = ({ children }: AuthProps) => {
  const navigate = useNavigate()

  const [email, setEmail] = React.useState<string | undefined>(undefined)
  const [authenticated, setAuth] = React.useState<boolean>(false)

  React.useEffect(() => {
    const isAuth = isAuthenticated()
    if (isAuth) {
      setAuth(true)
      setEmail(getLastUser())
    } else {
      removeAuthentication()
    }
  }, [])

  const newUser = () => {
    setEmail(undefined)
    removeLastUser()
    navigate(ROOT)
  }

  const checkEmail = (emailParam: string) => {
    setEmail(emailParam)
    setLastUser(emailParam)
    const emailList = registeredEmail()
    if (emailList.includes(emailParam)) {
      navigate(LOGIN)
    } else {
      navigate(REGISTER)
    }
  }

  const register = (email: string, password: string) => {
    registerUser(email, password)
    setEmail(email)
    setLastUser(email)
    navigate(LOGIN)
  }

  const handleLogin = (email: string, password: string) => {
    if (userLogin(email, password)) {
      setAuth(true)
      setAuthentication()
      navigate(BUSINESS_DETAILS)
    }
  }

  const handleLogout = () => {
    setAuth(false)
    removeAuthentication()
    navigate(ROOT)
  }

  const value = {
    email,
    authenticated,
    newUser,
    checkEmail,
    register,
    onLogin: handleLogin,
    onLogout: handleLogout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
