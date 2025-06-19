'use client'
import React from 'react'
import s from './cart-counter.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/redux/store'
export const CartCounter = () => {
  const { items } = useSelector((state: RootState) => state.cart)
  const totalItems = items.reduce((total, item ) => total + item.quantity, 0)
  if (totalItems > 0){
     return (
    <span className={s.thumb}>{totalItems}</span>
  )
  }else{
    return null
  }
 
}
