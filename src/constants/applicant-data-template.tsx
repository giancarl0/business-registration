export type ApplicantData = {
  firstName: string;
  lastName: string;
  birthDate: string;
  idNumber: string;
  image: string;
}

const ApplicantDataTemplate = {
  firstName: '',
  lastName: '',
  birthDate: '',
  idNumber: '',
  image: ''
} as ApplicantData

export default ApplicantDataTemplate
