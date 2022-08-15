import React from 'react'
import { Outlet } from 'react-router'

import Header from 'components/header/Header'
import SideNav from 'components/sidenav/SideNav'
import ContentContainer from 'components/content-container/ContentContainer'
import ProgressNav from 'components/progress-nav/ProgressNav'
import useAuth from 'hooks/useAuth'
import useToggle from 'hooks/useToggle'

import './main-layout.scss'

const MainLayout = () => {
  const { authenticated } = useAuth()
  const [isSidenavOpen, toggleSidenav] = useToggle(false)

  React.useEffect(() => {
    if (!authenticated) toggleSidenav(false)
  }, [authenticated])

  return <>
    <Header logo={'LOGO'} onClick={() => toggleSidenav()} />
    <div className='main-body'>
      <ContentContainer isSidenavOpen={isSidenavOpen} >
          <Outlet />
      </ContentContainer>
      <SideNav isOpen={isSidenavOpen} >
          <ProgressNav />
      </SideNav>
    </div>
  </>
}

export default MainLayout
