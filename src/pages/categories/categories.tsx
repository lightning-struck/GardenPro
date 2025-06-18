import { Section } from '@/shared/section/section'
import React from 'react'
import { categories } from '@/lib/config/data'
import { CategoryCard } from '@/components/category-card/category-card'
import s from './categories.module.scss'

export const Categories = () => {
  return (
    <Section topMargin isH1 title='Categories'  nav_link='' nav_text='' nav_disabled>
      <div className={s.categories}>

        {categories.map((category, index) => (
          <CategoryCard key={index} image={category.image} alt={category.alt} link={category.link} title={category.title}/>
        ))}
      </div>

    </Section>
  )
}
