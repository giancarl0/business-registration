import React from 'react'
import clsx from 'clsx'

import './content-container.scss'

interface ContentContainerProps {
  isSidenavOpen: boolean;
  children: any;
}

const ContentContainer = ({ isSidenavOpen, children }: ContentContainerProps) => {
  return <div className={clsx('content-container', { open: isSidenavOpen })}>
    {children}
  </div>
}

export default ContentContainer
