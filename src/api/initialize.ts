import { userData } from 'constants/api_keys'
import ApplicantDataTemplate from 'constants/applicant-data-template'
import BusinessDataTemplate from 'constants/business-data-template'
import { DirectorData } from 'constants/director-data-template'
import { getUserData, updateEmailList } from './api'
import { get, post } from './utils'

const defaultData = [{
  email: 'test@test.com',
  password: 'password',
  businessData: BusinessDataTemplate,
  directorData: [] as DirectorData[],
  applicantData: ApplicantDataTemplate
}]

const emailListFromUserData = () => {
  const storedData = getUserData()
  if (storedData) {
    const usersEmail = storedData.map(userData => userData.email) as string[]
    updateEmailList(usersEmail)
  }
}

export const initializeDefaultData = () => {
  if (get(userData) === null) {
    post(userData, defaultData)
  }
  emailListFromUserData()
}
