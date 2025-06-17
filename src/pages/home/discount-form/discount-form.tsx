import { Section } from '@/shared/section/section'
import React from 'react'
import s from './discount-form.module.scss'
import { Input } from '@/shared/input/input'
import { FormDiscount } from '@/components/form-discount/form-discount'
export const DiscountForm = () => {
  return (
    <Section remove_heading title='' nav_text='' nav_link=''>
      <div className={s.form}>
        <h3 className={s.form_title}>5% off on the first order</h3>
        <div className={s.form_content}>
          <img src="/images/discount_image.png" alt="5% off on the first order" className={s.image} />
          <FormDiscount />
        </div>
      </div>
    </Section>
  )
}
