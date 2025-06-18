'use client'
import React, { useState } from 'react'
import s from './cart-product.module.scss'
import { ProductCounter } from '@/shared/product-counter/product-counter'
import { Remove } from '@/shared/icons/Remove'
export const CartProduct = () => {
  const [countValue, setValue] = useState<number>(1)
  return (
    <div className={s.product}>
      <div className={s.product_img_wrapper}>
        <img src={'/images/page-product.png'} alt='product' />
      </div>
      <div className={s.product_content}>
        <div className={s.product_content_title}><span>Secateurs</span><button><Remove /></button></div>
        <div className={s.product_content_options}>
          <ProductCounter value={countValue} setValue={setValue} />
          <div className={s.product_content_prices}>
            <span className={s.product_price}>$155<s>$240</s>  </span>
          </div>
        </div>
      </div>

    </div>
  )
}
