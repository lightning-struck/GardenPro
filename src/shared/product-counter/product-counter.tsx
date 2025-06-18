'use client '

import React from 'react'
import s from './product-counter.module.scss'
import { Increment } from '../icons/Increment'
import { Decrement } from '../icons/Decrement'
import cn from 'classnames'
import { ProductCounter as Type } from './product-counter.interface'
export const ProductCounter: React.FC<Type> = ({ value, setValue }) => {

  const handleChangeValue = (operationType: 'increment' | 'decrement') => {
    if (operationType === 'decrement'){
      setValue((value: number) => value - 1) 
    }
    if (operationType === 'increment'){
        setValue((value: number) => value + 1)
    }
  }


  return (
    <div className={s.counter}>
      <button disabled={value === 1} onClick={value > 1 ? () => handleChangeValue('decrement') : () => {}} className={cn(s.counter_btn, s.counter_increment)}><Decrement /></button>
      <span className={s.counter_value}>{value}</span>
      <button onClick={() => handleChangeValue('increment')} className={cn(s.counter_btn, s.counter_decrement)}><Increment /></button>

    </div>
  )
}
