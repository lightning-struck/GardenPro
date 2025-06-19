import { Section } from '@/shared/section/section'
import React from 'react'

import { CategoryCard } from '@/components/category-card/category-card'
import s from './categories.module.scss'
import { ICategoryCardProps } from '@/components/category-card/category-card.interface'
import { ICategoriesPageProps } from '../../lib/types/categories/categories.interface'

const Categories = ({ categories }: ICategoriesPageProps) => {
  
  return (
    <Section topMargin isH1 title='Categories' nav_link='' nav_text='' nav_disabled>
      <div className={s.categories}>

        {categories?.map((category, index: number) => (
          <CategoryCard id={index} key={index} image={process.env.NEXT_PUBLIC_API + '/' + category.image} alt={category.alt} link={'/categories/' + String(category.id)} title={category.title} />
        ))}
      </div>

    </Section>
  )
}
export default Categories;