'use client'
import React from 'react'
import s from './product-card.module.scss'
import { IProductCardProps } from './product-card.interface'
import { Button } from '@/shared/button/button'
import Link from 'next/link'
import { ProductSale } from '@/shared/product-sale/product-sale'
import { RootState } from '@/lib/redux/store'

import { useDispatch, useSelector } from 'react-redux'

import { addToCart } from '@/lib/redux/slices/cart/cartSlice'

export const ProductCard: React.FC<IProductCardProps> = (props) => {
  const { alt, id, image, discount_price, real_price, title, link } = props
  const renderPrice = (discount_price: number | null | undefined, real_price: number) => {
    if (discount_price) {
      return <span className={s.product_footer_price}>${discount_price} <s>${real_price}</s> </span>
    }
    else {
      return <span className={s.product_footer_price}>${real_price} </span>
    }
  }
  let discount_percent = null

  if (discount_price) {
    discount_percent = Math.ceil(100 - (discount_price / real_price * 100))
  }
  const isInCart = useSelector((state: RootState) =>
    state.cart.items.some(item => item.id === id))

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
    <div className={s.product}>
      <div className={s.product_image_wrapper}>
        <img src={image} alt={alt} />
        <Button
          variant={isInCart ? 'outlined' : 'green'}
          onClick={handleAddToCart}
          className={s.product_btn}
          disabled={isInCart}
        >
          {isInCart ? 'Added' : 'Add to cart'}
        </Button>
        {discount_price && discount_percent && <ProductSale className={s.product_sale} value={discount_percent} />}
      </div>
      <Link href={link ?? ''} className={s.product_footer}>
        <span className={s.product_footer_title}>{title}</span>
        {renderPrice(discount_price, real_price)}
      </Link>
    </div>
  )
}
