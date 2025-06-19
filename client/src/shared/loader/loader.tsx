import React from 'react'
import s from './loader.module.scss'
import cn from 'classnames'
export const Loader = ({className} : {className?: string}) => {
  return (
    <span className={cn(s.loader, className)}></span>
  )
}
