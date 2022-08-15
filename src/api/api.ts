import { emailList, lastUser, userAuth, userData } from 'constants/api_keys'
import NewUserTemplate, { UserData } from 'constants/new-user-template'
import { get, post, remove } from './utils'

export const getUserData = (): UserData[] => {
  return get(userData) ?? []
}

export const getCurrentUserData = (email: string): UserData => {
  return getUserData().filter((userData: UserData) => userData.email === email)[0] ?? NewUserTemplate
}

export const registeredEmail = (): string[] => {
  return get(emailList)
}

export const updateEmailList = (emails: string[]) => {
  post(emailList, emails)
}

export const setLastUser = (email: string) => {
  post(lastUser, email)
}

export const getLastUser = (): string => {
  return get(lastUser)
}

export const removeLastUser = () => {
  remove(lastUser)
}

export const userLogin = (email: string, password: string) => {
  const userData = getCurrentUserData(email)
  return password === userData.password
}

const now = new Date().getTime()
export const setAuthentication = () => {
  // 1 day = 86400000
  // 1 min = 60000
  const expiry = new Date(now + 300000).getTime()
  post(userAuth, expiry)
}

export const isAuthenticated = (): boolean => {
  const authExpiry = get(userAuth)
  return authExpiry > now
}

export const removeAuthentication = () => {
  remove(userAuth)
}

export const addNewUserData = (newUserData: UserData) => {
  const updatedUsersData = [...getUserData(), newUserData]
  post(userData, updatedUsersData)
}

export const registerUser = (email: string, password: string) => {
  const newUserData = {
    ...NewUserTemplate,
    email,
    password
  }
  addNewUserData(newUserData)
  const updatedEmails: string[] = [
    ...registeredEmail(),
    email
  ]
  updateEmailList(updatedEmails)
}

export const updateUserData = (updatedUserData: UserData) => {
  const allUserData = getUserData()
  const currentUserIndex = allUserData.findIndex(userData => userData.email === updatedUserData.email)
  allUserData[currentUserIndex] = updatedUserData
  post(userData, allUserData)
}
