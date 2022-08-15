import React from 'react'
import { Routes, Route } from 'react-router'

import MainLayout from 'components/main-layout/MainLayout'
import ProtectedRoute from './protected-route/ProtectedRoute'
import Home from 'pages/Home/Home'
import Login from 'pages/Login/Login'
import Register from 'pages/Register/Register'
import BusinessDetails from 'pages/BusinessDetails/BusinessDetails'

import ROUTES from 'constants/route-constants'
import DirectorDetails from 'pages/DirectorDetails/DirectorDetails'
import ApplicantDetails from 'pages/ApplicantDetails/ApplicantDetails'
import ReviewDetails from 'pages/Review/ReviewDetails'
import DoneRegistration from 'pages/DoneRegistration/DoneRegistration'

const AppRoutes = () => {
  return <Routes>
    <Route path={ROUTES.ROOT} element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />
      <Route path={ROUTES.BUSINESS_DETAILS} element={<ProtectedRoute>
                                                        <BusinessDetails />
                                                      </ProtectedRoute>} />
      <Route path={ROUTES.DIRECTOR_DETAILS} element={<ProtectedRoute>
                                                        <DirectorDetails />
                                                      </ProtectedRoute>} />
      <Route path={ROUTES.APPLICANT_DETAILS} element={<ProtectedRoute>
                                                        <ApplicantDetails />
                                                      </ProtectedRoute>} />
      <Route path={ROUTES.REVIEW} element={<ProtectedRoute>
                                              <ReviewDetails />
                                            </ProtectedRoute>} />
      <Route path={ROUTES.DONE_REGISTRATION} element={<ProtectedRoute>
                                                        <DoneRegistration />
                                                      </ProtectedRoute>} />
    </Route>
  </Routes>
}

export default AppRoutes
