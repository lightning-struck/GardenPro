'use client'
import React, { useEffect } from 'react'
import s from './dropdown.module.scss'
import { ArrowDown } from '../icons/ArrowDown'
import { useState } from 'react'
import cn from 'classnames'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useOutsideClick } from '@/lib/hooks/useOutsideClick'
import { IDropdownProps } from './dropdown.interface'

export const Dropdown: React.FC<IDropdownProps> = (props) => {
  const { defaultValue, options, name } = props
  const [isOpen, setOpen] = useState<boolean>(false)
  const [selectedValue, setSelectedValue] = useState<number>(defaultValue)
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const ref = useOutsideClick(() => {
    setOpen(false)
  });
  useEffect(() => {
    if (searchParams && options.length > 0) {
      const paramValue = searchParams.get(name);
      if (paramValue) {
        const option = options.find(opt => opt.value === paramValue);
        if (option) {
          setSelectedValue(option.id);
        }
      }
    }
  }, [name, searchParams, options]);

  const selectedOption = options.find(obj => obj.id === selectedValue);
  const selectedValueText = selectedOption?.value;

  const handleOptionClick = (id: number) => {
    const clickedOption = options.find(opt => opt.id === id);
    if (!clickedOption) return;

    setSelectedValue(id);
    setOpen(false);

    if (!searchParams) return;

    const params = new URLSearchParams(searchParams.toString());

    if (id !== defaultValue) {
      params.set(name, clickedOption.value);
    } else {
      params.delete(name);
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  if (!options) return null;


  if (!options) return null
  return (
    <div ref={ref} onClick={() => setOpen(!isOpen)} className={s.dropdown}>
      <div className={s.value_wrapper}>
        <p className={s.selected_value}>{selectedValueText}</p>
        <ArrowDown className={cn(s.arrow, isOpen && s.arrow_open)} />
      </div>
      <div className={cn(s.options, isOpen && s.open)}>
        <div className={s.options_wrapper}>
          {options?.map((item, index) => (
            <button
              key={index}
              disabled={selectedValue === item.id}
              onClick={() => handleOptionClick(item.id)}
            >
              {item.value}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
