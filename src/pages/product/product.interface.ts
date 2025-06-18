export interface IProductPageProps {
  id: string | number
  image: string
  title: string
  real_price: number
  discount_price: number | null | undefined
  description: string | null
  alt: string
}