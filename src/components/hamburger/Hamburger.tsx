import React from 'react'
import clsx from 'clsx'

import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

import Button from 'components/common/button/Button'
import useToggle from 'hooks/useToggle'

interface HamburgerProps {
  onClick: any
}

const Hamburger = ({ onClick }: HamburgerProps) => {
  const [isOpen, toggleOpen] = useToggle(false)

  const onBurgerClick = () => {
    if (onClick) onClick()
    toggleOpen()
  }

  return <Button onClick={onBurgerClick} className={clsx('hamburger', { open: isOpen })}>
    {isOpen ? <CloseIcon/> : <MenuIcon />}
  </Button>
}

export default Hamburger
