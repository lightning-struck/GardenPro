import React from 'react'
import s from './button.module.scss'
import cn from 'classnames'
import { IButtonProps } from './button.interface'
import Link from 'next/link'

export const Button: React.FC<IButtonProps> = (props) => {
  const { onClick, children, variant = 'green', disabled = false, type = 'button', className = "", isLink, href } = props
  const buttonClasses = [
    s.button,
    s[`button--${variant}`],
    disabled && s['button--disabled'],
    className,
  ]
    .filter(Boolean)
    .join(' ');
  if (isLink) {
    return (
      <Link
        href={href ?? ''}
        className={buttonClasses}
      >
        {children}
      </Link>
    )
  }
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
