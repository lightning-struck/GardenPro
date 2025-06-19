'use client'
import { Section } from '@/shared/section/section'
import React from 'react'
import s from './cart.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/redux/store'
import { CartProducts } from '@/components/cart-products/cart-products'
import { CartTotal } from '@/components/cart-total/cart-total'
import { Button } from '@/shared/button/button'
export default function Cart  () {
  const { items } = useSelector((state: RootState) => state?.cart)
  const totalItems = items.reduce((total, item) => total + item.quantity, 0)
  const isEmpty = false;
  if (totalItems > 0) {
    return (
      <Section isH1 className={s.section} nav_link='/products' nav_text='Back to the store' title='Shopping cart'>
        <div className={s.content}>
          <CartProducts />
          <CartTotal />
        </div>
      </Section>
    )

  }
  return (
    <Section isH1 className={s.section} nav_link='/products' nav_text='Back to the store' title='Shopping cart'>
      <p className={s.empty}>Looks like you have no items in your basket currently.</p>
      <Button isLink href='/products' className={s.btn} variant='green'>
        Continue Shopping
      </Button>
    </Section>
  )
}
