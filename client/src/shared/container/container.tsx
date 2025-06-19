import React from 'react'
import cn from 'classnames'
export const Container = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <div className={cn('container', className)}>{children}</div>
  )
}
