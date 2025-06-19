import React from 'react'
import s from './product.module.scss'
import { IProductPageProps } from './product.interface'
import { Section } from '@/shared/section/section'
import { ProductSale } from '@/shared/product-sale/product-sale'
import { CartAdder } from '@/components/product-card/ui/cart adder/cart-adder'
import { IProductCardProps } from '@/components/product-card/product-card.interface'

export const Product: React.FC<IProductCardProps> = (props) => {


  const renderPrice = (discount_price: number | null | undefined, real_price: number) => {
    if (discount_price) {
      let discount_percent = Math.ceil(100 - (discount_price / real_price * 100))
      return <span className={s.product_price}>${discount_price} <s>${real_price}<ProductSale className={s.product_percent} value={discount_percent} /> </s>  </span>
    }
    else {
      return <span className={s.product_price}>${real_price} </span>
    }
  }


  const { image = '/images/page-product.png', title = "Secateurs", real_price = 240, discount_price = 199, description = '', id, alt='' } = props

  const product = {...props}

  return (
    <Section topMargin nav_disabled remove_heading nav_link='' nav_text='' title=''>

      <div className={s.product}>
        <img className={s.product_image} src={image} alt={title} />
        <div className={s.product_content}>
          <h1>{title}</h1>
          <div className={s.product_prices}>
            {renderPrice(discount_price, real_price)}
          </div>
          <CartAdder product={product} />
          <div className={s.product_description}>
            <p className={s.product_description_title}>Description</p>
            {description && <article dangerouslySetInnerHTML={{ __html: description }} />}
          </div>
        </div>
      </div>

    </Section>
  )
}
