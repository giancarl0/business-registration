/* eslint-disable */
import React from 'react'

import { Navigate } from 'react-router-dom'

import Button from 'components/common/button/Button'
import InputField from 'components/common/input-field/InputField'
import useAuth from 'hooks/useAuth'
import { BUSINESS_DETAILS } from 'constants/route-constants'
import { getLastUser } from 'api/api'
import AuthPagesContainer from 'components/auth-pages-container/AuthPagesContainer'

const Home = () => {
  const { authenticated, checkEmail } = useAuth()
  const [inputEmail, setInputEmail] = React.useState(undefined)
  const lastUser = getLastUser()

  if (authenticated) return <Navigate to={BUSINESS_DETAILS} replace />
  if (lastUser) checkEmail(lastUser)

  return <AuthPagesContainer>
    <InputField label="Email" onChange={(event: any) => setInputEmail(event.target.value)} fullWidth/>
    <Button onClick={() => checkEmail(inputEmail)} color='primary'>Next</Button>
  </AuthPagesContainer>
}

export default Home
