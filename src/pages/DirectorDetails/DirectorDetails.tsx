import React from 'react'
import CloseIcon from '@mui/icons-material/Close'

import FormContainer from 'components/form-container/FormContainer'
import InputField from 'components/common/input-field/InputField'
import Button from 'components/common/button/Button'
import { APPLICANT_DETAILS } from 'constants/route-constants'
import { UPDATE_DIRECTOR_DATA } from 'constants/user-actions'
import { useNavigate } from 'react-router'
import useUserData from 'hooks/useUserData'
import { DirectorData } from 'constants/director-data-template'

const DirectorDetails = () => {
  const navigate = useNavigate()
  const { state, dispatch } = useUserData()
  const initDirectorData = state.directorData && Object.keys(state.directorData).length > 0 ? state.directorData : [] as DirectorData[]
  const [directorData, setDirectorData] = React.useState<DirectorData[]>(initDirectorData)
  const [inputName, setInputName] = React.useState(undefined)
  const [inputEmail, setInputEmail] = React.useState(undefined)

  const removeDirector = (inputIndex: number) => {
    setDirectorData(directorData.filter((data, index) => index !== inputIndex))
  }

  const addDirector = () => {
    if (inputName && inputEmail) {
      setDirectorData([...directorData, { name: inputName, email: inputEmail }])
      setInputName(undefined)
      setInputEmail(undefined)
    }
  }

  const handleNextClick = () => {
    dispatch({ type: UPDATE_DIRECTOR_DATA, payload: directorData })
    navigate(APPLICANT_DETAILS)
  }

  return <FormContainer title='Director Details' action={<Button onClick={handleNextClick} disabled={!(directorData.length > 0)} color='primary'>{state.status === 4 ? 'Update' : 'Next'}</Button>}>
            {[...directorData, ...(directorData.length < 10 ? [{ name: undefined, email: undefined }] : [])].map((directorData, index) => <React.Fragment key={directorData.email ?? index}>
              <InputField
                label='Director Name'
                fullWidth
                value={directorData.name}
                disabled={Boolean(directorData.name)}
                onChange={(e: any) => { if (!directorData.name) setInputName(e.target.value) }}
                required
                />
              <div style={{ display: 'flex' }}>
                <InputField
                  label='Email'
                  fullWidth
                  value={directorData.email}
                  disabled={Boolean(directorData.email)}
                  onChange={(e: any) => { if (!directorData.email) setInputEmail(e.target.value) }}
                  required
                />
                <div style={{ display: 'flex', alignItems: 'flex-end', padding: '20px' }}>
                {(directorData.name && directorData.email)
                  ? <Button style={{ width: '50px', height: '30px' }} onClick={() => removeDirector(index)}><CloseIcon /></Button>
                  : <Button style={{ width: '50px', height: '30px' }} color='primary' onClick={() => addDirector()}>Add</Button>}
                </div>
              </div>
            </ React.Fragment>)
            }
        </FormContainer>
}

export default DirectorDetails
