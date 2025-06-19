import React from 'react'
import s from './not-found.module.scss'
import { Section } from '@/shared/section/section'
import { Button } from '@/shared/button/button'

const NotFound= () => {
  return (
    <Section className={s.section} nav_link='' nav_disabled nav_text='' title=''>
      <div className={s.wrapper}>
        <img src={'/images/404.png'} alt="404" />
        <div className={s.content}>
          <h1>Page Not Found</h1>
          <p>We’re sorry, the page you requested could not be found.
            Please go back to the homepage.</p>
          <Button className={s.btn} isLink href='/' variant='green'>
            Go Home
          </Button>
        </div>
      </div>
    </Section>
  )
}
export default NotFound;