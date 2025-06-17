import React from 'react'
import { ICategoryCardProps } from './category-card.interface'
import s from './category-card.module.scss'
import Link from 'next/link'
export const CategoryCard: React.FC<ICategoryCardProps> = (props) => {
  const {image, alt, link, title} = props
  return (
    <Link href={link} className={s.category}>
      <div className={s.category_image}>
        <img src={image} alt={alt} />
      </div>
      <p className={s.category_title}>{title}</p>
    </Link>
  )
}
