import React from 'react'
import { IProductSaleProps } from './product-sale.interface'
import s from './product-sale.module.scss'
import cn from 'classnames'

export const ProductSale: React.FC<IProductSaleProps> = (props) => {
  const {value, className} = props
  return (
    <span className={cn(s.product_sale, className)}>-{value}%</span>
  )
}
