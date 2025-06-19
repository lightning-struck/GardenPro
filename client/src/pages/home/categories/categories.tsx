import { CATEGORIES_PAGE_PATH } from '@/lib/config/paths'
import { Section } from '@/shared/section/section'
import React from 'react'
import { home_categories } from '@/lib/config/data'
import s from './categories.module.scss'
import { CategoryCard } from '@/components/category-card/category-card'
import { ICategoriesPageProps } from '@/lib/types/categories/categories.interface'
const Categories = ({ categories }: ICategoriesPageProps) => {

  return (
    <Section title='Categories' nav_link={CATEGORIES_PAGE_PATH} nav_text={'All categories'}>
      <div className={s.categories}>
        {categories?.slice(0, 4).map((category, index) => (
          <CategoryCard id={index} key={index} image={process.env.NEXT_PUBLIC_API + '/' + category.image} alt={category.alt} link={'/categories/' + String(category.id)} title={category.title} />
        ))}
      </div>
    </Section>
  )
}
export default Categories