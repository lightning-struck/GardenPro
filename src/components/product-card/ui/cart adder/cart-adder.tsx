'use client'
import React, { useState } from 'react'
import s from './cart-adder.module.scss'
import { ProductCounter } from '@/shared/product-counter/product-counter'
import { Button } from '@/shared/button/button'
export const CartAdder = () => {
  const [counterValue, setValue] = useState<number>(1)
  return (
    <div className={s.adder}>
      <ProductCounter value={counterValue} setValue={setValue} />
      <Button>
        Add to cart
      </Button>
    </div>
  )
}
