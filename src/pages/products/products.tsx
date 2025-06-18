import { Section } from '@/shared/section/section'
import React from 'react'
import { IProductsPageProps } from './products.interface'
import { Filters } from '@/components/filters/filters'
import s from './products.module.scss'
import { ProductCard } from '@/components/product-card/product-card'
export const Products: React.FC<IProductsPageProps> = (props) => {
  const { pageTitle = 'Tools and equipment', products, filters } = props
  return (
    <Section topMargin title={pageTitle} isH1 nav_disabled nav_link='' nav_text=''>
      <Filters {...filters} />
      <div className={s.products}>
        {products.map((product, index) => (
          <ProductCard key={product.id} id={product.id} image={product.image} real_price={product.real_price} discount_price={product.discount_price} alt={product.alt} title={product.title} />
        ))}
      </div>
    </Section>
  )
}
