import React from 'react'
import { CartProduct } from './ui/cart-product/cart-product'
import s from './cart-product.module.scss'
export const CartProducts = () => {
  return (
    <div className={s.wrapper}>
      <CartProduct />
      <CartProduct />
      <CartProduct />
      <CartProduct />
      <CartProduct />
      <CartProduct />
      <CartProduct />
      <CartProduct />
      <CartProduct />
    </div>
  )
}
