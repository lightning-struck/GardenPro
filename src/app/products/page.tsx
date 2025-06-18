import React from 'react'
import { Products as ProductsPage } from '@/pages/products/products'
import { category_products } from '@/lib/config/data'

const filters = {
  discountFilter: true, priceFilter: true, sortFilter: true
}


export default function Products() {
  return (
    <ProductsPage pageTitle='All products' products={category_products} filters={filters}/>
  )
}
