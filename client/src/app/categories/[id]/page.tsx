import { Products } from "@/pages/products/products";
import { category_products } from "@/lib/config/data";
import { serverFetch } from "@/lib/api/api";
import { CategoryPageData } from "@/lib/types/category/category-page.interface";

const filters = {
  discountFilter: true, priceFilter: true, sortFilter: true
}


export default async function Category({ params }: { params: { id: string } }) {
  console.log(params.id);
  const fetchedData = await serverFetch<CategoryPageData>(`/categories/${params.id}`)
  const {data, category} = fetchedData
  const adaptedProducts = data.map(product => ({
    id: product.id,
    real_price: product.price,
    discount_price: product.discont_price,
    image: product.image,
    alt: product.title, 
    title: product.title,
    link: `/products/${product.id}` 
  }));
  return <Products pageTitle={category.title} products={adaptedProducts} filters={filters} />
}