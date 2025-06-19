'use client'
import { Button } from '@/shared/button/button';
import { Input } from '@/shared/input/input';
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import s from './form-discount.module.scss'
import { IFormDiscountProps } from './form-discount.interface';
import { useDispatch, useSelector } from 'react-redux';
import { ModalType, openModal } from '@/lib/redux/slices/modal/modalSlice';
import { serverFetch } from '@/lib/api/api';
import { RootState } from '@/lib/redux/store';
import { Loader } from '@/shared/loader/loader';
import { ApiResponse } from '@/lib/types/api/api.interface';
import { clearCart } from '@/lib/redux/slices/cart/cartSlice';

type FormData = {
  name: string;
  email: string;
  phoneNumber: string
  cart?: {
    id: number,
    quantity: number
  }[]
};
export const FormDiscount: React.FC<IFormDiscountProps> = ({ form_variant, endpoint }) => {
  const methods = useForm<FormData>();
  const { handleSubmit, reset, formState: { errors } } = methods;
  const dispatch = useDispatch()
  const { items = [] } = useSelector(
  (state: RootState) => state?.cart ?? { items: [] }
);
  const [pending, setPending] = useState<boolean>(false)

  const filteredItems = items.map(item => ({
    id: item.id,
    quantity: item.quantity
  }))
  const onSubmit = async (data: FormData) => {
    const formData = {
      ...data,
      ...(form_variant === 'order' && { cart: filteredItems })
    };
    setPending(true)
    try {

      const response = await serverFetch<ApiResponse>(endpoint, {
        method: 'POST',
        body: formData
      });


      if (form_variant === 'discount' && response.status === 'OK') {
        dispatch(openModal('discount'))
      }
      if (form_variant === 'order' && response.status === 'OK') {
        dispatch(openModal('order'))
        dispatch(clearCart())
      }
      setPending(false)
    } catch (error) {
      setPending(false)
      console.error('Error submitting form:', error);

    } finally {

      reset();
    }



  };
  if (form_variant === 'discount') {
    return (
      <FormProvider {...methods}>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <Input<FormData>
            name="name"
            label="Name"
            validation={{ required: 'Name is required' }}
            errors={errors}
            variant='discount'
          />
          <Input<FormData>
            name="phoneNumber"
            label="Phone Number"
            validation={{ required: 'Phone is required' }}
            errors={errors}
            variant='discount'
          />
          <Input<FormData>
            name="email"
            label="Email"
            validation={{
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            }}
            variant='discount'
            errors={errors}
          />

          <Button disabled={pending} className={s.btn} variant='white' type="submit">{pending ? <Loader /> : "Get a discount"}</Button>
        </form>
      </FormProvider>
    );
  } else {
    return (
      <FormProvider {...methods}>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <Input<FormData>

            name="name"
            label="Name"
            validation={{ required: 'Name is required' }}
            errors={errors}
            variant='order'
          />
          <Input<FormData>
            name="phoneNumber"
            label="Phone Number"
            validation={{ required: 'Phone is required' }}
            errors={errors}
            variant='order'
          />
          <Input<FormData>
            name="email"
            label="Email"
            validation={{
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            }}
            variant='order'
            errors={errors}
          />

          <Button disabled={pending} className={s.btn} variant='green' type="submit">{pending ? <Loader /> : "Order"}</Button>
        </form>
      </FormProvider>
    )
  }
};

