import React from 'react'
import useAuth from 'hooks/useAuth'
import Hamburger from 'components/hamburger/Hamburger'

import './header.scss'

interface HeaderProps {
  logo: any;
  onClick?: any;
};

const Header = ({ logo, onClick }: HeaderProps) => {
  const { authenticated } = useAuth()

  return <div className="header">
    <div className='logo-container'>{logo}</div>
    {authenticated && <Hamburger onClick={onClick}/>}
  </div>
}

export default Header
