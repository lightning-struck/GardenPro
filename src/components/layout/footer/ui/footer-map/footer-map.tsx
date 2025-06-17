'use client'
import React from 'react'
import s from './footer-map.module.scss'

import {
  YMaps,
  Map,
  FullscreenControl,
  ZoomControl,
  Placemark,
} from '@pbe/react-yandex-maps'
import { Container } from '@/shared/container/container'

export const FooterMap = () => {
  return (
    <Container>
      <YMaps>
        <div className={s.map} id='map-container' style={{ width: '100%', height: '350px' }}>
          <Map
            style={{ width: '100%', height: '100%' }}
            defaultState={{ center: [43.125193, 131.905100], zoom: 17 }}
          >
            <ZoomControl
              options={{
                size: 'small',
                position: {
                  right: 10,
                  bottom: 20,
                },
              }}
            />
            <Placemark geometry={[43.125193, 131.905100]} />
          </Map>
        </div>
      </YMaps>
    </Container>

  )
}
