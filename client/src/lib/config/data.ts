import { ICategoryCardProps } from "@/components/category-card/category-card.interface";
import { MAIN_PAGE_PATH, ALL_SALES_PAGE_PATH, CATEGORIES_PAGE_PATH, ALL_PRODUCTS_PAGE_PATH } from "./paths";
import { IProductCardProps } from "@/components/product-card/product-card.interface";
import { IDropDownOption, IDropdownProps } from "@/shared/dropdown/dropdown.interface";

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

export const home_sales: IProductCardProps[] = [
  {
    id: 1,
    title: 'Decorative forged bridge',
    image: '/images/product_1.png',
    alt: 'Decorative forged bridge',
    discount_price: 500,
    real_price: 1000,
    link: '/products/decorative-forged-bridge'
  },
  {
    id: 2,
    title: 'Flower basket',
    image: '/images/product_2.png',
    alt: 'Flower basket',
    discount_price: 100,
    real_price: 150,
    link: '/products/flower-basket'
  },
  {
    id: 3,
    title: 'Aquarium lock',
    image: '/images/product_3.png',
    alt: 'Aquarium lock',
    discount_price: 150,
    real_price: 200,
    link: '/products/aquarium-lock'
  },
  {
    id: 4,
    title: 'Secateurs',
    image: '/images/product_4.png',
    alt: 'Secateurs',
    discount_price: 199,
    real_price: 240,
    link: '/products/secateurs'
  },
]

export const categories:  ICategoryCardProps [] = [
  {
    image: '/images/cat_1.png',
    alt: 'Fertilizer',
    title: 'Fertilizer',
    link: CATEGORIES_PAGE_PATH + '/fertilizer'
  },
  {
    image: '/images/cat_2.png',
    alt: 'Protective products and septic tanks',
    title: 'Protective products and septic tanks',
    link: CATEGORIES_PAGE_PATH + '/protective-products-and-septic-tanks'
  },
  {
    image: '/images/cat_3.png',
    alt: 'Planting material',
    title: 'Planting material',
    link: CATEGORIES_PAGE_PATH + '/planting-material'
  },
  {
    image: '/images/cat_4.png',
    alt: 'Tools and equipment',
    title: 'Tools and equipment',
    link: CATEGORIES_PAGE_PATH + '/tools-and-equipment'
  },
  {
    image: '/images/cat_5.jpg',
    alt: 'Pots and planters',
    title: 'Pots and planters',
    link: CATEGORIES_PAGE_PATH + '/pots-and-planters'
  },

]

const sorting_list_items: IDropDownOption[] = [
  {
    id: 1, 
    value: 'by default'
  }, 
  {
    id: 2,
    value: 'newest',
  },
  {
    id: 3,
    value: 'price: high-low'
  },
  {
    id: 4,
    value: 'price: low-high'
  }
]

export const sorting_list: IDropdownProps = {
  defaultValue: sorting_list_items[0].id,
  options: [...sorting_list_items],
  name: 'sort'
}

export const category_products: IProductCardProps[] = [
  {
    id: 1,
    title: 'Decorative forged bridge',
    image: '/images/product_1.png',
    alt: 'Decorative forged bridge',
    discount_price: 500,
    real_price: 1000,
    link: '/products/decorative-forged-bridge'
  },
  {
    id: 2,
    title: 'Flower basket',
    image: '/images/product_2.png',
    alt: 'Flower basket',
    discount_price: 100,
    real_price: 150,
    link: '/products/flower-basket'
  },
  {
    id: 3,
    title: 'Aquarium lock',
    image: '/images/product_3.png',
    alt: 'Aquarium lock',
    discount_price: 150,
    real_price: 200,
    link: '/products/aquarium-lock'
  },
  {
    id: 4,
    title: 'Secateurs',
    image: '/images/product_4.png',
    alt: 'Secateurs',
    discount_price: null,
    real_price: 99,
    link: '/products/secateurs'
  },
  {
    id: 5,
    title: 'Decorative forged bridge',
    image: '/images/product_1.png',
    alt: 'Decorative forged bridge',
    discount_price: null,
    real_price: 1000,
    link: '/products/decorative-forged-bridge'
  },
  {
    id: 6,
    title: 'Flower basket',
    image: '/images/product_2.png',
    alt: 'Flower basket',
    discount_price: 100,
    real_price: 150,
    link: '/products/flower-basket'
  },
  {
    id: 7,
    title: 'Aquarium lock',
    image: '/images/product_3.png',
    alt: 'Aquarium lock',
    discount_price: 150,
    real_price: 200,
    link: '/products/aquarium-lock'
  },
  {
    id: 8,
    title: 'Secateurs',
    image: '/images/product_4.png',
    alt: 'Secateurs',
    discount_price: 199,
    real_price: 240,
    link: '/products/secateurs'
  },
]
