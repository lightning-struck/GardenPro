'use client'
import React from 'react'
import s from './product-card.module.scss'
import { IProductCardProps } from './product-card.interface'
import { Button } from '@/shared/button/button'



export const ProductCard: React.FC<IProductCardProps> = (props) => {
  const { alt, id, image, discount_price, real_price, title } = props
  const renderPrice = (discount_price: number | null | undefined, real_price: number) => {
    if (discount_price) {
      return <span className={s.product_footer_price}>${discount_price} <s>${real_price}</s> </span>
    }
    else {
      return <span className={s.product_footer_price}>${real_price} </span>
    }
  }
  const discount_percent = Math.ceil(100 - (discount_price / real_price * 100))
  return (
    <div className={s.product}>
      <div className={s.product_image_wrapper}>
        <img src={image} alt={alt} />
        <Button className={s.product_btn}>Add to cart</Button>
        {discount_price && <span className={s.product_sale}>-{discount_percent}%</span>}
      </div>
      <div className={s.product_footer}>
        <span className={s.product_footer_title}>{title}</span>
        {renderPrice(discount_price, real_price)}
      </div>
    </div>
  )
}
