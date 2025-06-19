import { IProductCardProps } from "@/components/product-card/product-card.interface";
import { IProductPageProps } from "@/pages/product/product.interface";

export interface Category {
  id: number;
  title: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface DataProduct extends Omit<IProductCardProps, 'real_price' | 'discount_price' | 'alt'> {
  price: number;
  discont_price: number | null;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  description?: string
}

export interface CategoryPageData {
  category: Category;
  data: DataProduct[];
}