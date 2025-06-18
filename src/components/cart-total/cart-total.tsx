import React from 'react'
import s from './cart-total.module.scss'
import { FormDiscount } from '../form-discount/form-discount'


export const CartTotal = () => {
  return (
    <div className={s.total}>
      <div className={s.total_wrapper}>
        <h2>Order details</h2>
        <div className={s.total_info}>
          <div className={s.total_info_row}>
            <p className={s.total_info_item}>4 items</p>
          </div>
          <div className={s.total_info_row}>
            <p className={s.total_info_item}>Total</p>
            <p className={s.total_info_price}>$541,00</p>
          </div>
        </div>
        <FormDiscount endpoint='' form_variant='order' />
      </div>
    </div>
  )
}
