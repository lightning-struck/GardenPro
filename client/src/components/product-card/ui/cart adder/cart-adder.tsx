'use client'
import React, { useEffect, useState } from 'react'
import s from './cart-adder.module.scss'
import { ProductCounter } from '@/shared/product-counter/product-counter'
import { Button } from '@/shared/button/button'
import { addToCart } from '@/lib/redux/slices/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { IProductCardProps } from '../../product-card.interface'
import cn from 'classnames'
import { RootState } from '@/lib/redux/store'
export const CartAdder = ({ product }: { product: IProductCardProps }) => {
  const { id, title, image, real_price, discount_price } = product
  const [visible, setVisible] = useState<boolean>(false)
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootState) => state.cart)

  let isItemExists = items.some(obj => obj.id === id)

  const handleAddToCart = () => {
    dispatch(addToCart({
      id,
      title,
      image,
      price: real_price,
      discountPrice: discount_price
    }))
    setVisible(true)
  }
  useEffect(() => {
    if (isItemExists)
      setVisible(true)
  }, [isItemExists])


  return (
    <div className={cn(s.adder, visible && s.adder_visible)}>
      <ProductCounter className={cn(s.counter, visible && s.counter_visible)} productId={Number(id)} />
      <Button
        variant={isItemExists ? 'outlined' : 'green'}
        onClick={handleAddToCart}
        className={s.product_btn}
        disabled={isItemExists}
      >
        {isItemExists ? 'Added' : 'Add to cart'}
      </Button>
    </div>
  )
}
