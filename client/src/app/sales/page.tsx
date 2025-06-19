import React from 'react'
import SalesPage from '@/pages/products/products'
import { home_sales } from '@/lib/config/data'
import { serverFetch } from '@/lib/api/api'
import { DataProduct } from '@/lib/types/category/category-page.interface'

const filters = {
  discountFilter: false, priceFilter: true, sortFilter: true
}


export default async function Sales() {
  const products = await serverFetch<DataProduct[]>('/products/all')
  const adaptedProducts = products.map(product => ({
    id: product.id,
    real_price: product.price,
    discount_price: product.discont_price,
    image: product.image,
    alt: product.title,
    title: product.title,
    link: `/products/${product.id}`
  }));
  const discountedProducts = adaptedProducts.filter(product =>
    product.discount_price !== null && product.discount_price !== undefined
  );
  return (

    <SalesPage pageTitle='Discounted items' products={discountedProducts} filters={filters} />
  )
}
