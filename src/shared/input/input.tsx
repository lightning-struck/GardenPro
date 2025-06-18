import React, { useEffect, useRef, useState } from 'react'
import { InputProps } from './input.interface';
import { FieldValues, useFormContext } from 'react-hook-form';
import s from './input.module.scss'
import cn from 'classnames'
export const Input = <T extends FieldValues>({
  name,
  label,
  variant,
  validation,
  errors,
  ...rest
}: InputProps<T>) => {
  const { register, watch } = useFormContext<T>();
  const errorMessage = errors?.[name]?.message as string | undefined;
  const [labelActive, setLabelActive] = useState(false);
  const value = watch(name); 

  useEffect(() => {
    if (value !== undefined && value !== null && value !== '') {
      setLabelActive(true);
    } else {
      setLabelActive(false);
    }
  }, [value]);

  const { ref: registerRef, ...registerProps } = register(name, validation);

  return (
    <div className={cn(s.input_container, errorMessage && s.input_error,variant === 'order' && s.input_container_order)}>
      {label && (
        <label htmlFor={name} className={cn(s.input_label, (labelActive || rest.value) && s.input_label_active)}>
          {label}
        </label>
      )}
      <input
        id={name}
        className={cn(s.input_field)}
        ref={(e) => {
          registerRef(e); 
          
        }}
        {...registerProps}
        {...rest}
      />
      {errorMessage && <span className={cn(s.error, variant === 'order' && s.error_order)}>{errorMessage}</span>}
    </div>
  );
};