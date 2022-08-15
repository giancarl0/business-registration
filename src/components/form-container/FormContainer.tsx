import React from 'react'

import CardContainer from 'components/common/card-container/CardContainer'

import './form-container.scss'

interface FormContainerProps {
  title: string;
  children: any;
  action?: any;
}

const FormContainer = ({ title, action, children }: FormContainerProps) => {
  return <CardContainer rounded raised title={ <h3>{title}</h3> }>
    <div className='form-container'>
      {children}
    </div>
    <div>
      {action}
    </div>
  </CardContainer>
}

export default FormContainer
