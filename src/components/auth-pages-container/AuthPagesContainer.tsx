import React from 'react'

import CardContainer from 'components/common/card-container/CardContainer'

import './auth-pages-container.scss'

const AuthPagesContainer = ({ children }: any) => {
  return <CardContainer className='auth-container' raised rounded>
        {children}
  </CardContainer>
}

export default AuthPagesContainer
