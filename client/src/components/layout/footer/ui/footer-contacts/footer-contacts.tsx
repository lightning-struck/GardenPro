import React from 'react'
import s from './footer-contacts.module.scss'
import { Container } from '@/shared/container/container'
import { InfoBlock } from '@/shared/info-block/info-block'
import Link from 'next/link'
import { ADDRESS, CALL_PHONE, INSTAGRAM_LINK, WHATSAPP_LINK } from '@/lib/config/constants'
import { Instagram } from '@/shared/icons/Instagram'
import { WhatsApp } from '@/shared/icons/WhatsApp'
export const FooterContacts = () => {
  return (

    <div className={s.contacts}>
      <InfoBlock label='Phone'>
        <Link className={s.contacts_phone} href={'tel:' + CALL_PHONE}>{CALL_PHONE}</Link>
      </InfoBlock>
      <InfoBlock label='Socials'>
        <div className={s.contacts_socials}>
          <Link className={s.contacts_socials_item} href={INSTAGRAM_LINK} target='_blank'>
            <Instagram />
          </Link>
          <Link className={s.contacts_socials_item} href={WHATSAPP_LINK} target='_blank'>
            <WhatsApp />
          </Link>
        </div>
      </InfoBlock>
      <InfoBlock label='Address'>
        {ADDRESS}
      </InfoBlock>
      <InfoBlock label='Working Hours'>
        24 hours a day
      </InfoBlock>
    </div>

  )
}
