'use client'
import React from 'react'
import s from './cart-total.module.scss'
import { FormDiscount } from '../form-discount/form-discount'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/redux/store'

export const CartTotal = () => {
  const { items } = useSelector((state: RootState) => state.cart)
  const totalItems = items.reduce((total, item ) => total + item.quantity, 0)
  const getTotalPrice = () => {
    return items.reduce(
      (total, item) => total + (item.discountPrice || item.price) * item.quantity,
      0
    )
  }
  return (
    <div className={s.total}>
      <div className={s.total_wrapper}>
        <h2>Order details</h2>
        <div className={s.total_info}>
          <div className={s.total_info_row}>
            <p className={s.total_info_item}>{totalItems} items</p>
          </div>
          <div className={s.total_info_row}>
            <p className={s.total_info_item}>Total</p>
            <p className={s.total_info_price}>${getTotalPrice().toFixed(2)}</p>
          </div>
        </div>
        <FormDiscount endpoint='' form_variant='order' />
      </div>
    </div>
  )
}
