import { Container } from '@/shared/container/container'
import React from 'react'
import { FooterContacts } from './ui/footer-contacts/footer-contacts'
import { FooterMap } from './ui/footer-map/footer-map'

export const Footer = () => {
  return (
    <Container>
      <FooterContacts />
      <FooterMap />
    </Container>
  )
}
