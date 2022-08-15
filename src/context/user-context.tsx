import React from 'react'

import NewUserTemplate, { UserData } from 'constants/new-user-template'
import useAuth from 'hooks/useAuth'
import userReducer from 'reducer/userReducer'
import { getCurrentUserData } from 'api/api'
import { ALL_USER_DATA } from 'constants/user-actions'

interface UserContextProps {
  children: any;
}

const defaultValue = {
  state: NewUserTemplate,
  dispatch: () => null
}

export const UserContext = React.createContext<{ state: UserData, dispatch: React.Dispatch<any> }>(defaultValue)

export const UserProvider = ({ children }: UserContextProps) => {
  const { email } = useAuth()
  const currentUserData = getCurrentUserData(email ?? '')
  const [state, dispatch] = React.useReducer(userReducer, currentUserData)

  React.useEffect(() => {
    if (JSON.stringify(currentUserData) !== JSON.stringify(state)) {
      dispatch({ type: ALL_USER_DATA, payload: currentUserData })
    }
  }, [currentUserData])

  const contextValue = React.useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  )
}
