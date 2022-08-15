import React from 'react'
import clsx from 'clsx'

import './input-field.scss'

interface InputComponentTypes {
  type?: 'text' | 'dropdown';
  className?: string;
  value?: any;
  disabled?: boolean;
  onChange?: any;
  onBlur?: any;
  htmlType?: string;
  options?: any;
}

const InputComponent = ({ type, className, htmlType, options, ...props }: InputComponentTypes) => {
  switch (type) {
    case 'text' : return <input className={clsx('input', `input-${type}`, className)} type={htmlType} {...props} />
    case 'dropdown': return <select className={clsx('input', `input-${type}`, className)} {...props}>
                              {options && options.map((value: any) => <option key={value} value={value}>{value}</option>)}
                            </select>
    default : return <input className={clsx('input', `input-${type}`, className)} type={htmlType} {...props} />
  }
}

interface InputFieldProps extends InputComponentTypes {
  variant?: 'outlined';
  label?: string;
  error?: boolean;
  errorMessage?: string;
  fullWidth?: boolean;
  required?: boolean;
}

const InputField = ({ type, label, error, errorMessage, fullWidth, required, ...props }: InputFieldProps) => {
  return <div className={clsx('input-container', { 'full-width': fullWidth })}>
      <span>{label}</span>
      <InputComponent type={type ?? 'text'} {...props} />
      {(error && errorMessage) && <span className='error-message'>{errorMessage}</span>}
    </div>
}

export default InputField
