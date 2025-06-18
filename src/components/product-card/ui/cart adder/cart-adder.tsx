'use client'
import React, { useState } from 'react'
import s from './cart-adder.module.scss'
import { ProductCounter } from '@/shared/product-counter/product-counter'
import { Button } from '@/shared/button/button'
import { addToCart } from '@/lib/redux/slices/cart/cartSlice'
import { useDispatch } from 'react-redux'
import { IProductCardProps } from '../../product-card.interface'
export const CartAdder = ({product}: {product: IProductCardProps}) => {
  const {id, title, image, real_price, discount_price} = product

   const dispatch = useDispatch()

  const handleAddToCart = () => {
      dispatch(addToCart({
        id,
        title,
        image,
        price: real_price,
        discountPrice: discount_price
      }))
    }


  return (
    <div className={s.adder}>
      <ProductCounter productId={id} />
      <Button onClick={handleAddToCart}>
        Add to cart
      </Button>
    </div>
  )
}
