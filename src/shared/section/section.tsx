import React from 'react'
import { ISectionProps } from './section.interface'
import s from './section.module.scss'
import { Container } from '../container/container'
import Link from 'next/link'
import cn from 'classnames'
export const Section: React.FC<ISectionProps> = (props) => {
  const { children, title, nav_link, nav_text, nav_disabled, isH1, className, remove_heading } = props

  return (
    <section className={cn(s.section, className)}>
      <Container>

        {remove_heading !== true && <div className={s.section_heading}>
          {isH1 ? <h1>{title}</h1> : <h2>{title}</h2>}
          {!nav_disabled &&
            <div className={s.section_link}>
              <span className={s.section_line}></span>
              <Link className={s.section_link_item} href={nav_link ?? ''}>{nav_text}</Link>
            </div>}
        </div>}

        {children}

      </Container>
    </section>
  )
}
