import { Products } from "@/pages/products/products";
import { category_products } from "@/lib/config/data";

const filters = {
  discountFilter: true, priceFilter: true, sortFilter: true
}


export default function Category() {
  return <Products pageTitle="Tools and equipment" products={category_products} filters={filters} />
}