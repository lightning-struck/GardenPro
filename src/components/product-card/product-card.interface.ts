export interface IProductCardProps {
  id: number | string
  real_price: number
  discount_price: number | null | undefined
  image: string
  alt: string
  title: string
  link?: string
}