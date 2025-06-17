'use client'
import { Button } from '@/shared/button/button';
import { Input } from '@/shared/input/input';
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import s from './form-discount.module.scss'
type FormData = {
  Name: string;
  email: string;
  PhoneNumber: string
};
export const FormDiscount = () => {
  const methods = useForm<FormData>();
  const { handleSubmit, formState: { errors } } = methods;

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <Input<FormData>
          name="Name"
          label="Name"
          validation={{ required: 'Name is required' }}
          errors={errors}
        />
        <Input<FormData>
          name="PhoneNumber"
          label="Phone Number"
          validation={{ required: 'Phone is required' }}
          errors={errors}
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
          errors={errors}
        />

        <Button className={s.btn} variant='white' type="submit">Get a discount</Button>
      </form>
    </FormProvider>
  );
};

