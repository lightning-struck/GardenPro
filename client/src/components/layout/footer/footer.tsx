import { Container } from '@/shared/container/container'
import React from 'react'
import { FooterContacts } from './ui/footer-contacts/footer-contacts'
import { FooterMap } from './ui/footer-map/footer-map'
import { Section } from '@/shared/section/section'

export const Footer = () => {
  return (
  <Section title='Contact' nav_disabled nav_link='' nav_text=''>
      <FooterContacts />
      <FooterMap />
   </Section>
  )
}
