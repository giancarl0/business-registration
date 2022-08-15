import ApplicantDataTemplate, { ApplicantData } from './applicant-data-template'
import BusinessDataTemplate, { BusinessData } from './business-data-template'
import { DirectorData } from './director-data-template'

export interface UserData {
  email: string;
  password: string;
  status: number,
  businessData: BusinessData;
  directorData: DirectorData[];
  applicantData: ApplicantData;
}

const NewUserTemplate = {
  email: '',
  password: '',
  status: 0,
  businessData: BusinessDataTemplate,
  directorData: [] as DirectorData[],
  applicantData: ApplicantDataTemplate
} as UserData

export default NewUserTemplate
