/* eslint-disable */
import React from 'react'

import { Navigate } from 'react-router-dom'

import Button from 'components/common/button/Button'
import InputField from 'components/common/input-field/InputField'
import useAuth from 'hooks/useAuth'
import { BUSINESS_DETAILS, ROOT } from 'constants/route-constants'
import AuthPagesContainer from 'components/auth-pages-container/AuthPagesContainer'

const Login = () => {
  const { email, authenticated, onLogin, newUser } = useAuth()
  const [password, setInputPassword] = React.useState(undefined)

  if (authenticated) return <Navigate to={BUSINESS_DETAILS} replace />
  if (!email) return <Navigate to={ROOT} replace />

  return <AuthPagesContainer>
    <InputField label="Email" value={email} disabled fullWidth/>
    <InputField label="Password" htmlType='password' onChange={(event: any) => setInputPassword(event.target.value)} fullWidth/>

    <Button onClick={() => onLogin(email, password)} color='primary'>Log In</Button>
    <span onClick={newUser}>Not you? Click here</span>
  </AuthPagesContainer>
}

export default Login
