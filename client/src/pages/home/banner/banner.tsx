import React from 'react'
import s from './banner.module.scss'
import Image from 'next/image'
import { Container } from '@/shared/container/container'
import { Button } from '@/shared/button/button'


const Banner = () => {
  return (
    <section className={s.banner}>
      <Image fill objectFit='cover' className={s.banner_image} src={'/images/home_banner.jpg'} quality={70} alt='HomeBanner' />
      <Container className={s.container}>
        <h1 className={s.banner_title}>
          Amazing Discounts on Garden Products!
        </h1>
        <Button className={s.banner_btn} variant='green'>
          Check in
        </Button>
      </Container>
    </section>
  )
}
export default Banner