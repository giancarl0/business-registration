import React from 'react'

import FormContainer from 'components/form-container/FormContainer'
import InputField from 'components/common/input-field/InputField'
import Button from 'components/common/button/Button'
import ApplicantDataTemplate from 'constants/applicant-data-template'
import useUserData from 'hooks/useUserData'
import { useNavigate } from 'react-router'
import { UPDATE_APPLICANT_DATA } from 'constants/user-actions'
import { REVIEW } from 'constants/route-constants'
import ImageUploader from 'components/common/image-uploader/ImageUploader'

const ApplicantDetails = () => {
  const navigate = useNavigate()
  const { state, dispatch } = useUserData()
  const initApplicantData = state.applicantData && Object.keys(state.applicantData).length > 0 ? state.applicantData : ApplicantDataTemplate
  const [tempApplicantData, setTempApplicantData] = React.useState(initApplicantData)

  const handleInputChange = (key: string, value: any) => {
    setTempApplicantData(prevApplicantData => ({
      ...prevApplicantData,
      [key]: value
    }))
  }

  const handleNextClick = () => {
    dispatch({ type: UPDATE_APPLICANT_DATA, payload: tempApplicantData })
    navigate(REVIEW)
  }

  const isIdNumberValid = () => {
    return !(tempApplicantData.idNumber.length > 10)
  }

  const isFormValid = () => {
    return !(Object.values(tempApplicantData).includes('') || (!isIdNumberValid())) // eslint-disable-line
  }

  return <FormContainer title='Applicant Details' action={<Button onClick={handleNextClick} disabled={!isFormValid()} color='primary'>{state.status === 4 ? 'Update' : 'Next'}</Button>}>
            <div>
              <ImageUploader value={tempApplicantData.image} onChange={(e: any, key: string) => handleInputChange('image', key)}></ImageUploader>
            </div>
            <div>
              <InputField label="First Name" value={tempApplicantData.firstName} onChange={(e: any) => handleInputChange('firstName', e.target.value)} fullWidth/>
              <InputField label="Last Name" value={tempApplicantData.lastName} onChange={(e: any) => handleInputChange('lastName', e.target.value)} fullWidth/>
              <InputField label="Date of Birth" htmlType='date' value={tempApplicantData.birthDate} onChange={(e: any) => handleInputChange('birthDate', e.target.value)} fullWidth/>
              <InputField
                label="Identification Number"
                value={tempApplicantData.idNumber}
                onChange={(e: any) => handleInputChange('idNumber', e.target.value)}
                fullWidth
                error={!isIdNumberValid()}
                errorMessage='Invalid Company Number Format'
                />
            </div>
        </FormContainer>
}

export default ApplicantDetails
