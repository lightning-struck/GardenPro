import { ProductCard } from "@/components/product-card/product-card";
import { Banner } from "@/pages/home/banner/banner";
import { Categories } from "@/pages/home/categories/categories";
import { DiscountForm } from "@/pages/home/discount-form/discount-form";
import { Sales } from "@/pages/home/sales/sales";



export default function Home() {
  return (
    <>
      <Banner />
      <Categories />
      <DiscountForm />
      <Sales />
    </>
  );
}
