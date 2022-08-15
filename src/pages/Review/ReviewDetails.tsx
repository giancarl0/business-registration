import React from 'react'
import { useNavigate } from 'react-router'

import CardContainer from 'components/common/card-container/CardContainer'
import Button from 'components/common/button/Button'
import ImageUploader from 'components/common/image-uploader/ImageUploader'
import useUserData from 'hooks/useUserData'
import { DONE_REGISTRATION } from 'constants/route-constants'
import { SUBMIT_APPLICATION } from 'constants/user-actions'

import './review.scss'

const SectionContainer = ({ title, children }: {title: string, children: any}) => {
  return <div>
    <h4>{title}</h4>
    <div className='review-section'>
      {children}
    </div>
  </div>
}

const DisplayInfo = ({ label, value }: {label: string, value: any}) => {
  return <div className='review-info'><span>{`${label}: `}</span>{value}</div>
}

const ReviewDetails = () => {
  const navigate = useNavigate()
  const { state, dispatch } = useUserData()
  const { businessData, directorData, applicantData } = state

  const handleSubmit = () => {
    dispatch({ type: SUBMIT_APPLICATION })
    navigate(DONE_REGISTRATION)
  }

  return <CardContainer rounded raised title={ <h3>Review</h3> } className='review-container'>
    <SectionContainer title='Business Details'>
      <DisplayInfo label='Company Name' value={businessData.companyName} />
      <DisplayInfo label='Trading Name' value={businessData.tradingName} />
      <DisplayInfo label='Company Number' value={businessData.companyNumber} />
      <DisplayInfo label='Registration Date' value={businessData.registrationDate} />
      <DisplayInfo label='Country' value={businessData.country} />
      <DisplayInfo label='Address' value={businessData.address} />
    </SectionContainer>
    <SectionContainer title='Directors'>
      {directorData && directorData.map((director, index) => <React.Fragment key={director.email}>
        <DisplayInfo label={`Director ${index + 1} Name`} value={director.name} />
        <DisplayInfo label='Email' value={director.email} />
      </React.Fragment>)}
    </SectionContainer>
    <SectionContainer title='Applicant Details'>
        <div><ImageUploader displayOnly value={applicantData.image}/></div>
        <div>
          <DisplayInfo label='First Name' value={applicantData.firstName} />
          <DisplayInfo label='Last Name' value={applicantData.lastName} />
          <DisplayInfo label='Date of Birth' value={applicantData.birthDate} />
          <DisplayInfo label='Identification Number' value={applicantData.idNumber} />
        </div>
    </SectionContainer>
    <Button color='primary' onClick={handleSubmit}>{state.status === 4 ? 'Update Application' : 'Submit'}</Button>
  </CardContainer>
}

export default ReviewDetails
