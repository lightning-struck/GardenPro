import { ICategoryCardProps } from "@/components/category-card/category-card.interface";
import { ProductCard } from "@/components/product-card/product-card";
import { serverFetch } from "@/lib/api/api";
import { DataProduct } from "@/lib/types/category/category-page.interface";
import  Banner  from "@/pages/home/banner/banner";
import Categories  from "@/pages/home/categories/categories";
import DiscountForm  from "@/pages/home/discount-form/discount-form";
import Sales  from "@/pages/home/sales/sales";


export default async function Home() {
const products = await serverFetch<DataProduct[]>('/products/all')
const categories = await serverFetch<ICategoryCardProps[] >('/categories/all')
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

const randomDiscountedProducts = discountedProducts
  .sort(() => 0.5 - Math.random()) 
  .slice(0, 4);

  return (
    <>
      <Banner />
      <Categories categories={categories} />
      <DiscountForm />
      <Sales products={randomDiscountedProducts}/>
    </>
  );
}
