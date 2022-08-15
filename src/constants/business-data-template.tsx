export type BusinessData = {
  companyName: string;
  companyNumber: string;
  country: string;
  tradingName: string;
  registrationDate: string;
  address: string;
}

const BusinessDataTemplate = {
  companyName: '',
  companyNumber: '',
  country: '',
  tradingName: '',
  registrationDate: '',
  address: ''
} as BusinessData

export default BusinessDataTemplate
