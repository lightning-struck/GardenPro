import { Categories as CategoriesPage } from "@/pages/categories/categories"
import { withSSR } from "@/lib/api/withSSR"
import { serverFetch } from "@/lib/api/api"
import { ICategoriesPageProps } from "@/pages/categories/categories.interface"
import { ICategoryCardProps } from "@/components/category-card/category-card.interface"




export default async function Categories() {
  const categories = await serverFetch<ICategoryCardProps[] >('/categories/all')

  return <CategoriesPage categories={categories} />
}

