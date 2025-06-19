import { IFiltersProps } from "@/components/filters/filters.interface"
import { IProductCardProps } from "@/components/product-card/product-card.interface"

export interface IProductsPageProps {
  pageTitle: string
  products: IProductCardProps[]
  filters?: IFiltersProps
}