import { CATEGORIES_PAGE_PATH } from '@/lib/config/paths'
import { Section } from '@/shared/section/section'
import React from 'react'
import { home_categories } from '@/lib/config/data'
import s from './categories.module.scss'
import { CategoryCard } from '@/components/category-card/category-card'
export const Categories = () => {
  return (
    <Section title='Categories' nav_link={CATEGORIES_PAGE_PATH} nav_text={'All categories '}>
      <div className={s.categories}>
        {home_categories.map((category, index) => (
          <CategoryCard 
          key={index} 
          title={category.title} 
          alt={category.alt} 
          link={category.link} 
          image={category.image} />
        ))}
      </div>
    </Section>
  )
}
