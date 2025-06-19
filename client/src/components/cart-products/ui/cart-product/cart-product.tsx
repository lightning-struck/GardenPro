'use client'
import React, { useState } from 'react'
import s from './cart-product.module.scss'
import { ProductCounter } from '@/shared/product-counter/product-counter'
import { Remove } from '@/shared/icons/Remove'
import { removeFromCart } from '@/lib/redux/slices/cart/cartSlice'
import { IProductCardProps } from '@/components/product-card/product-card.interface'
import { useDispatch } from 'react-redux'
export const CartProduct: React.FC<IProductCardProps> = ({ id, image, title, real_price, discount_price, alt = '' }) => {
  const dispatch = useDispatch()
  const handleRemove = () => {
    dispatch(removeFromCart(Number(id)))
  }
  return (
    <div className={s.product}>
      <div className={s.product_img_wrapper}>
        <img src={image} alt={title} />
      </div>
      <div className={s.product_content}>
        <div className={s.product_content_title}><span>{title}</span><button onClick={handleRemove}><Remove /></button></div>
        <div className={s.product_content_options}>
          <ProductCounter productId={Number(id)} />
          {
            discount_price ? <div className={s.product_content_prices}>
              <span className={s.product_price}>${discount_price}
                <s>${real_price}</s>
              </span>
            </div> :
              <div className={s.product_content_prices}>
                <span className={s.product_price}>${real_price}

                </span>
              </div>
          }
        </div>
      </div>

    </div>
  )
}
