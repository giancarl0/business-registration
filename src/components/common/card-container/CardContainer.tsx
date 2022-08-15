import React from 'react'
import clsx from 'clsx'

import './card-container.scss'

interface CardContainerProps {
  children: any;
  className?: string;
  title?: any;
  rounded?: boolean;
  inverted?: boolean;
  outlined?: boolean;
  raised?: boolean;
  color?: 'primary' | 'secondary';
  style?: any;
}

const CardContainer = ({ children, rounded, inverted, outlined, raised, color, className, title, style }: CardContainerProps) => {
  return <div className={clsx('card-container', { rounded, inverted, outlined, raised, secondary: (color === 'secondary') }, className)} style={style}>
    {title && <div className='card-container-title'>{title}</div>}
    {children}
  </div>
}

export default CardContainer
