'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import { IFilterInputProps } from './filter-input.interface'
import s from './filter-input.module.scss'
import cn from 'classnames'

import { useDebounce } from '@/lib/hooks/useDebounce';

export const FilterInput: React.FC<IFilterInputProps> = (props) => {
  const {
    maxValue,
    minValue = 0,
    priceFilter,
    placeholder,
    className,
    paramName,
    debounceTime = 500,
  } = props;

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [rawValue, setRawValue] = useState(''); 
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const debouncedRawValue = useDebounce(rawValue, debounceTime);

  useEffect(() => {
    if (!searchParams) return;
    const paramValue = searchParams.get(paramName) || '';
    setRawValue(paramValue);
  }, [paramName, searchParams]);

  useEffect(() => {
    if (!searchParams || !pathname) return;
    
    const params = new URLSearchParams(searchParams.toString());
    const cleanValue = priceFilter 
      ? debouncedRawValue.replace(/[^0-9.]/g, '')
      : debouncedRawValue;
    
    if (cleanValue) {
      params.set(paramName, cleanValue);
    } else {
      params.delete(paramName);
    }
    router.replace(`${pathname}?${params.toString()}`);
  }, [debouncedRawValue, paramName, pathname, router, searchParams, priceFilter]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    if (priceFilter) {
      value = value.replace('$', '').replace(/[^0-9.]/g, '');
    }
    
    setRawValue(value);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const getDisplayValue = () => {
    if (!priceFilter) return rawValue;

    return rawValue && !isFocused ? `${rawValue}$` : rawValue;
  };

  return (
    <input
      ref={inputRef}
      type="text"
      inputMode={priceFilter ? "decimal" : "text"}
      className={cn(s.input, priceFilter && s.input_price, className)}
      min={minValue}
      max={maxValue}
      placeholder={placeholder ?? ''}
      value={getDisplayValue()}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};