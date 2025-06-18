export interface IProductPageProps {
  image: string
  title: string
  real_price: number
  discount_price: number | null | undefined
  description: string | null
}