import React from 'react'
import clsx from 'clsx'

import './button.scss'

interface ButtonComponentTypes {
  type?: 'button' | 'link' | 'text'
  children?: any;
  onClick?: any;
  className?: string;
  color?: 'primary' | 'secondary',
  style?: {};
  disabled?: boolean;
}

const ButtonComponent = ({ type, children, className, color, ...props }: ButtonComponentTypes) => {
  switch (type) {
    case 'button' : return <button className={clsx('button', color, className)} {...props}>{children}</button>
    default : return <button className={clsx('button', color, className)} {...props}>{children}</button>
  }
}

interface ButtonProps extends ButtonComponentTypes {
  variant?: 'outlined'
}

const Button = ({ type, children, ...props }: ButtonProps) => {
  return <ButtonComponent type={type ?? 'button'} {...props}>{children}</ButtonComponent>
}

export default Button
