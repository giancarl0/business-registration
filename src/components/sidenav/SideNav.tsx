import React from 'react'
import clsx from 'clsx'
import LogoutIcon from '@mui/icons-material/Logout'

import useAuth from 'hooks/useAuth'

import './sidenav.scss'
import Button from 'components/common/button/Button'

interface SideNavProps {
  isOpen: boolean,
  children?: any
}

const SideNav = ({ isOpen, children }: SideNavProps) => {
  const { onLogout } = useAuth()

  return <div className={clsx('sidenav', { open: isOpen })}>
      <div className='sidenav-contents'>
        {children}
      </div>
      <Button onClick={onLogout} className='logout-button'>
        <LogoutIcon sx={{ marginRight: '10px' }} /> Logout
      </Button>
  </div>
}

export default SideNav
