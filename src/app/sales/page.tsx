import React from 'react'
import { Products as SalesPage } from '@/pages/products/products'
import { home_sales } from '@/lib/config/data'

const filters = {
  discountFilter: false, priceFilter: true, sortFilter: true
}


export default function Sales() {
  return (
    <SalesPage pageTitle='Discounted items' products={home_sales} filters={filters} />
  )
}
