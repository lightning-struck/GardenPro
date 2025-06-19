import React from 'react'
import s from './header.module.scss'
import { Container } from '@/shared/container/container'
import { Logo } from '@/shared/icons/Logo'
import Link from 'next/link'
import { header_paths } from '@/lib/config/data'
import { CART_PAGE_PATH, MAIN_PAGE_PATH } from '@/lib/config/paths'
import { Cart } from '@/shared/icons/Cart'
import { CartCounter } from '@/components/cart-counter/cart-counter'

export const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.header_content}>
          <Link className={s.header_logo} href={MAIN_PAGE_PATH}>
            <Logo />
          </Link>
          <div className={s.header_nav}>
            {header_paths.map((item, index) => (
              <Link className={s.header_nav_item} key={index} href={item.path}>
                {item.text}
              </Link>
            ))}
          </div>
          <Link className={s.header_cart_link} href={CART_PAGE_PATH}>
          <div className={s.header_cart}>
              <Cart />
              <CartCounter />
          </div>
          </Link>
        </div>

      </Container>
    </header>
  )
}
