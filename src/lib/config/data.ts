import { ICategoryCardProps } from "@/components/category-card/category-card.interface";
import { MAIN_PAGE_PATH, ALL_SALES_PAGE_PATH, CATEGORIES_PAGE_PATH, ALL_PRODUCTS_PAGE_PATH } from "./paths";
import { IProductCardProps } from "@/components/product-card/product-card.interface";

interface IHeaderPaths {
  path: string;
  text: string
}



export const header_paths: IHeaderPaths[] = [
  {
    path: MAIN_PAGE_PATH,
    text: 'Main Page'
  },
  {
    path: CATEGORIES_PAGE_PATH,
    text: 'Categories',
  },
  {
    path: ALL_PRODUCTS_PAGE_PATH,
    text: 'All products',
  },
  {
    path: ALL_SALES_PAGE_PATH,
    text: 'All sales',
  }
]


export const home_categories:  ICategoryCardProps [] = [
  {
    image: '/images/cat_1.png',
    alt: 'Fertilizer',
    title: 'Fertilizer',
    link: CATEGORIES_PAGE_PATH + '/'
  },
  {
    image: '/images/cat_2.png',
    alt: 'Protective products and septic tanks',
    title: 'Protective products and septic tanks',
    link: CATEGORIES_PAGE_PATH + '/'
  },
  {
    image: '/images/cat_3.png',
    alt: 'Planting material	',
    title: 'Planting material	',
    link: CATEGORIES_PAGE_PATH + '/'
  },
  {
    image: '/images/cat_4.png',
    alt: 'Tools and equipment',
    title: 'Tools and equipment',
    link: CATEGORIES_PAGE_PATH + '/'
  },

]

export const home_sales: IProductCardProps [] = [
  {
    id: 1, 
    title: 'Decorative forged bridge',
    image: '/images/product_1.png',
    alt: 'Decorative forged bridge',
    discount_price: 500,
    real_price: 1000
  },
  {
    id: 2, 
    title: 'Flower basket',
    image: '/images/product_2.png',
    alt: 'Flower basket',
    discount_price: 100,
    real_price: 150
  },
  {
    id: 3, 
    title: 'Aquarium lock',
    image: '/images/product_3.png',
    alt: 'Aquarium lock',
    discount_price: 150,
    real_price: 200
  },
  {
    id: 4, 
    title: 'Secateurs',
    image: '/images/product_4.png',
    alt: 'Secateurs',
    discount_price: 199,
    real_price: 240
  },
]