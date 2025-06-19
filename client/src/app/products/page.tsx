import React from 'react'
import { Products as ProductsPage } from '@/pages/products/products'
import { category_products } from '@/lib/config/data'
import { serverFetch } from '@/lib/api/api'
import { DataProduct } from '@/lib/types/category/category-page.interface'

const filters = {
  discountFilter: true, priceFilter: true, sortFilter: true
}


export default async function Products() {
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
  return (
    <ProductsPage pageTitle='All products' products={adaptedProducts} filters={filters}/>
  )
}
