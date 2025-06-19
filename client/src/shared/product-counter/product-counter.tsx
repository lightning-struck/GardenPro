'use client '

import React from 'react'
import s from './product-counter.module.scss'
import { Increment } from '../icons/Increment'
import { Decrement } from '../icons/Decrement'
import cn from 'classnames'
import { incrementQuantity, decrementQuantity } from '@/lib/redux/slices/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/lib/redux/store'
import { ProductCounter as Type } from './product-counter.interface'
export const ProductCounter: React.FC<Type> = ({ productId, className }) => {
const dispatch = useDispatch()
  
  const value = useSelector((state: RootState) => {
    const item = state.cart.items.find(item => item.id === productId)
    return item ? item.quantity : 1
  })

  const handleIncrement = () => {
    dispatch(incrementQuantity(productId))
  }

  const handleDecrement = () => {
    dispatch(decrementQuantity(productId))
  }




  return (
    <div className={cn(s.counter, className)}>
      <button disabled={value === 1}  onClick={handleDecrement}  className={cn(s.counter_btn, s.counter_increment)}><Decrement /></button>
      <span className={s.counter_value}>{value}</span>
      <button  onClick={handleIncrement}  className={cn(s.counter_btn, s.counter_decrement)}><Increment /></button>

    </div>
  )
}
