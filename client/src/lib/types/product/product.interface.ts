export interface IProductPageProps {
  id: string;
  title: string;
  price: number;
  discont_price: number | null;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  categoryId: number;
}