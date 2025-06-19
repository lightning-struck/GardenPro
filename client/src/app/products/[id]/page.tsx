import React from 'react'
import ProductPage from '@/pages/product/product'
import { serverFetch } from '@/lib/api/api'
import { DataProduct } from '@/lib/types/category/category-page.interface'

export const dynamic = 'force-dynamic';
export default async function Product({params}: {params: Promise<{ id: string }>}) {
  const id = await params;
  const product = await serverFetch<DataProduct[]>(`/products/${id}`)
  const adaptedProducts = product.map(product => ({
    id: product.id,
    real_price: product.price,
    discount_price: product.discont_price,
    image: product.image,
    alt: product.title,
    title: product.title,
    description: product.description,
    link: `/products/${product.id}`
  }));
  return (
    <ProductPage id={adaptedProducts[0].id} alt={adaptedProducts[0].title} real_price={adaptedProducts[0].real_price} discount_price={adaptedProducts[0].discount_price} description={adaptedProducts[0].description} image={process.env.NEXT_PUBLIC_API + '/' + adaptedProducts[0].image} title={adaptedProducts[0].title} />
  )
}
