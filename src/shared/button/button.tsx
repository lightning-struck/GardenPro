import React from 'react'
import s from './button.module.scss'
import cn from 'classnames'
import { IButtonProps } from './button.interface'

export const Button: React.FC<IButtonProps> = (props) => {
  const { onClick, children, variant = 'green', disabled = false, type = 'button', className = "" } = props
  const buttonClasses = [
    s.button,
    s[`button--${variant}`],
    disabled && s['button--disabled'],
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {children}
    </button>
  )
}
