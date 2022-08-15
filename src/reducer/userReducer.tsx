import { updateUserData } from 'api/api'
import { UserData } from 'constants/new-user-template'
import userActions from 'constants/user-actions'

interface UserReducerAction {
  type: string;
  payload: any;
}

const userReducer = (state: UserData, action: UserReducerAction) => {
  switch (action.type) {
    case userActions.UPDATE_BUSINESS_DATA: {
      const newState = {
        ...state,
        status: state.status >= 1 ? state.status : 1,
        businessData: action.payload
      }
      updateUserData(newState)
      return newState
    }
    case userActions.UPDATE_DIRECTOR_DATA: {
      const newState = {
        ...state,
        status: state.status >= 2 ? state.status : 2,
        directorData: action.payload
      }
      updateUserData(newState)
      return newState
    }
    case userActions.UPDATE_APPLICANT_DATA: {
      const newState = {
        ...state,
        status: state.status >= 3 ? state.status : 3,
        applicantData: action.payload
      }
      updateUserData(newState)
      return newState
    }
    case userActions.SUBMIT_APPLICATION: {
      const newState = {
        ...state,
        status: state.status >= 4 ? state.status : 4
      }
      updateUserData(newState)
      return newState
    }
    case userActions.ALL_USER_DATA:
      return action.payload
    default: return state
  }
}

export default userReducer
