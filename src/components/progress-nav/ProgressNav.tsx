import React from 'react'
import { useNavigate, useLocation } from 'react-router'

import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import { APPLICANT_DETAILS, BUSINESS_DETAILS, DIRECTOR_DETAILS, DONE_REGISTRATION, REVIEW } from 'constants/route-constants'
import { useUserDataState } from 'hooks/useUserData'

const steps = [
  {
    label: 'Business Details',
    route: BUSINESS_DETAILS
  },
  {
    label: 'Director Details',
    route: DIRECTOR_DETAILS
  },
  {
    label: 'Applicant Details',
    route: APPLICANT_DETAILS
  },
  {
    label: 'Review',
    route: REVIEW
  },
  {
    label: 'Done',
    route: DONE_REGISTRATION
  }
]

const ProgressNav = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { status } = useUserDataState()
  // const [activeStep, setActiveStep] = React.useState(0)

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1)
  // }

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1)
  // }

  // const handleReset = () => {
  //   setActiveStep(0)
  // }

  const getCurrentStep = () => {
    return steps.findIndex(step => step.route === location.pathname)
  }

  const handleClick = (index: number, route: string) => {
    if ((status >= index)) {
      navigate(route)
    }
  }

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={getCurrentStep()} orientation="vertical" sx={{ '& .MuiStepConnector-line': { minHeight: '80px' } }}>
        {steps.map((step, index) => (
          <Step
            key={step.label}
            expanded
            onClick={() => handleClick(index, step.route)}
            completed={status >= index && index !== getCurrentStep()}
            sx={{
              '& .MuiSvgIcon-root.Mui-completed': { color: '#66bb6a', cursor: 'pointer' },
              '& .MuiSvgIcon-root.Mui-active': { cursor: 'pointer' },
              ...(status >= index ? { '& .MuiSvgIcon-root': { cursor: 'pointer' } } : {})
            }} >
            <StepLabel
              sx={{
                '& .MuiStepLabel-label': { color: '#c9c9c9' },
                '& .MuiStepLabel-label.Mui-active': { color: 'white' },
                '& .MuiStepLabel-label.Mui-completed': { color: '#81c784' }
              }}
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}

export default ProgressNav
