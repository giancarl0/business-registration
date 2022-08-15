import React from 'react'
import { UserContext } from 'context/user-context'

export const useUserDataState = () => {
  const { state } = React.useContext(UserContext)
  return state
}

export const useUserDataDispatch = () => {
  const { dispatch } = React.useContext(UserContext)
  return dispatch
}

const useUserData = () => {
  return React.useContext(UserContext)
}

export default useUserData
