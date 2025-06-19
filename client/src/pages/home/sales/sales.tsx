import { ALL_SALES_PAGE_PATH } from '@/lib/config/paths'
import { Section } from '@/shared/section/section'
import React from 'react'
import s from './sales.module.scss'
import { home_sales } from '@/lib/config/data'
import { ProductCard } from '@/components/product-card/product-card'
import { IProductsPageProps } from '@/pages/products/products.interface'
import { IProductCardProps } from '@/components/product-card/product-card.interface'
export const Sales = ({products}: {products: IProductCardProps[]}) => {
  return (
    <Section title='Sale' nav_text='All sales' nav_link={ALL_SALES_PAGE_PATH}>
      <div className={s.sales}>
        {products.map((product) => (
          <ProductCard key={product.id} id={product.id} image={process.env.NEXT_PUBLIC_API + '/' +product.image} link={product.link} real_price={product.real_price} discount_price={product.discount_price} alt={product.alt} title={product.title} />
        ))}
      </div>
    </Section>
  )
}
