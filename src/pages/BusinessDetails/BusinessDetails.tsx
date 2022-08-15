import React from 'react'

import FormContainer from 'components/form-container/FormContainer'
import InputField from 'components/common/input-field/InputField'
import Button from 'components/common/button/Button'
import useUserData from 'hooks/useUserData'
import BusinessDataTemplate from 'constants/business-data-template'
import { UPDATE_BUSINESS_DATA } from 'constants/user-actions'
import { useNavigate } from 'react-router'
import { DIRECTOR_DETAILS } from 'constants/route-constants'

const BusinessDetails = () => {
  const navigate = useNavigate()
  const { state, dispatch } = useUserData()
  const initBusinessData = state.businessData && Object.keys(state.businessData).length > 0 ? state.businessData : BusinessDataTemplate
  const [tempBusinessData, setTempBusinessData] = React.useState(initBusinessData)

  React.useEffect(() => {
    setTempBusinessData(state.businessData)
  }, [])

  const handleInputChange = (key: string, value: any) => {
    setTempBusinessData(prevBusinessData => ({
      ...prevBusinessData,
      [key]: value
    }))
  }

  const handleNextClick = () => {
    dispatch({ type: UPDATE_BUSINESS_DATA, payload: tempBusinessData })
    navigate(DIRECTOR_DETAILS)
  }

  const isCompanyNumberValid = () => {
    return !(tempBusinessData.companyNumber.length > 10)
  }

  const isFormValid = () => {
    return !(Object.values(tempBusinessData).includes('') || (!isCompanyNumberValid())) // eslint-disable-line
  }

  return <FormContainer title='Business Details' action={<Button color='primary' disabled={!isFormValid()} onClick={handleNextClick}>{state.status === 4 ? 'Update' : 'Next'}</Button>}>
            <InputField label="Company Name" value={tempBusinessData.companyName} onChange={(e: any) => handleInputChange('companyName', e.target.value)} fullWidth required/>
            <InputField label="Trading Name" value={tempBusinessData.tradingName} onChange={(e: any) => handleInputChange('tradingName', e.target.value)} fullWidth required/>
            <InputField
              label="Company Number"
              value={tempBusinessData.companyNumber}
              onChange={(e: any) => handleInputChange('companyNumber', e.target.value)}
              fullWidth
              error={!isCompanyNumberValid()}
              errorMessage='Invalid Company Number Format'
              required
              />
            <InputField label="Registration Date" htmlType='date' value={tempBusinessData.registrationDate} onChange={(e: any) => handleInputChange('registrationDate', e.target.value)} fullWidth required/>
            <InputField
              label="Country"
              type='dropdown'
              options={['Australia', 'New Zealand']}
              value={tempBusinessData.country}
              onChange={(e: any) => handleInputChange('country', e.target.value)}
              fullWidth
              required/>
            <InputField label="Address" value={tempBusinessData.address} onChange={(e: any) => handleInputChange('address', e.target.value)} fullWidth required/>
        </FormContainer>
}

export default BusinessDetails
