import React from 'react'
import { useNavigate } from 'react-router'

import CardContainer from 'components/common/card-container/CardContainer'
import Button from 'components/common/button/Button'
import { BUSINESS_DETAILS } from 'constants/route-constants'

const DoneRegistration = () => {
  const navigate = useNavigate()

  return <CardContainer raised rounded style={{ width: '400px', margin: 'auto' }}>
      <div>
        <h2>Thank you for trading with us!</h2>
        <p>Your application has been submitted for review.</p>
      </div>
      <Button color='primary' onClick={() => navigate(BUSINESS_DETAILS)}>Start Again</Button>
    </CardContainer>
}

export default DoneRegistration
