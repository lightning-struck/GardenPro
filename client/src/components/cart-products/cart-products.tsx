'use client'
import React from 'react'
import { CartProduct } from './ui/cart-product/cart-product'
import s from './cart-product.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/lib/redux/store'
export const CartProducts = () => {
  const { items } = useSelector((state: RootState) => state.cart)
  return (
    <div className={s.wrapper}>
      {items.map((item, index) => (
        <CartProduct key={index} id={item.id} image={item.image} real_price={item.price} discount_price={item.discountPrice} title={item.title} alt={item.title} />
      ))}
    </div>
  )
}
