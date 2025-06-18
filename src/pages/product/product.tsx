import React from 'react'
import s from './product.module.scss'
import { IProductPageProps } from './product.interface'
import { Section } from '@/shared/section/section'
import { ProductSale } from '@/shared/product-sale/product-sale'
import { CartAdder } from '@/components/product-card/ui/cart adder/cart-adder'
export const Product: React.FC<IProductPageProps> = (props) => {
  const des = "This high quality everyday secateur features a fully hardened and tempered, high-carbon steel blade for lasting sharpness. For comfort, the robust but lightweight alloy handles are covered in a soft grip, in a bright terracotta colour for maximum visibility in the garden. It won’t be easy to leave this pruner behind at the end of the day! Rubber cushion stops prevent jarring over repeated use, reducing hand strain for the user.This secateur cuts up to 2.5 cm diameter. Carrying RHS endorsement, possibly the highest accolade in gardening, for peace of mind this pruner comes with a ten-year guarantee against manufacturing defects.Supplied with replacement blade and spare spring. You may also be interested in our pack of two replacement springs."

  const renderPrice = (discount_price: number | null | undefined, real_price: number) => {
    if (discount_price) {
      let discount_percent = Math.ceil(100 - (discount_price / real_price * 100))
      return <span className={s.product_price}>${discount_price} <s>${real_price}<ProductSale className={s.product_percent} value={discount_percent} /> </s>  </span>
    }
    else {
      return <span className={s.product_price}>${real_price} </span>
    }
  }


  const { image = '/images/page-product.png', title = "Secateurs", real_price = 240, discount_price = 199, description = des } = props

  return (
    <Section topMargin nav_disabled remove_heading nav_link='' nav_text='' title=''>

      <div className={s.product}>
        <img className={s.product_image} src={image} alt={title} />
        <div className={s.product_content}>
          <h1>{title}</h1>
          <div className={s.product_prices}>
            {renderPrice(discount_price, real_price)}
          </div>
          <CartAdder />
          <div className={s.product_description}>
            <p className={s.product_description_title}>Description</p>
            {description && <article dangerouslySetInnerHTML={{ __html: description }} />}
          </div>
        </div>
      </div>

    </Section>
  )
}
