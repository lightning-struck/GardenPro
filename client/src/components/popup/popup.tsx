'use client'
import React, { useEffect } from 'react'
import s from './popup.module.scss'
import { FormClose } from '@/shared/icons/FormClose'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/lib/redux/store'
import { closeModal } from '@/lib/redux/slices/modal/modalSlice'
import cn from 'classnames'
export const Popup = () => {
  const { isOpen, modalType } = useSelector((state: RootState) => state.modal)
  const dispatch = useDispatch()
  useEffect(() => {
    isOpen ? document.querySelector('body')?.classList.add('bodyFixed') : document.querySelector('body')?.classList.remove('bodyFixed')
  }, [isOpen])

  return (
    <>
      <div className={cn(s.layout, isOpen && s.layout_show)} onClick={() => dispatch(closeModal())}></div>
      <div className={cn(s.form, isOpen && s.form_show)}>
        <div className={s.form_content}>
          <p className={s.form_content_title}>Congratulations!</p>
          {modalType === 'order' ? <p className={s.form_content_text}> <span>Your order has been successfully placed on the website.
          </span>
            <span>
              A manager will contact you shortly to confirm your order.</span></p> : <p className={s.form_content_text}> <span>
              </span>
            <span>
              A manager will contact you shortly</span></p>}
        </div>
        <div onClick={() => dispatch(closeModal())} className={s.close}>
          <FormClose />
        </div>
      </div>
    </>
  )
}
