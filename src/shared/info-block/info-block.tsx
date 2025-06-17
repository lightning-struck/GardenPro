import React from 'react'
import s from './info-block.module.scss'
import { IInfoBlockProps } from './info-block.interface'

export const InfoBlock: React.FC<IInfoBlockProps> = (props) => {
  const { children, label } = props
  return (
    <div className={s.block}>
      <p className={s.block_label}>{label}</p>
      <div className={s.block_text}>
        {children}
      </div>
    </div>
  )
}
