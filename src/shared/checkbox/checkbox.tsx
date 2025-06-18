'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import styles from './checkbox.module.scss';
import { useEffect, useState } from 'react';
import { CustomCheckboxProps } from './checkbox.interface';


export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ 
  name, 
  checked, 
  defaultValue = false 
}: CustomCheckboxProps) => {
  const [isChecked, setIsChecked] = useState(defaultValue);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (searchParams) {
      const paramValue = searchParams.get(name);
      setIsChecked(paramValue === 'true');
    }
  }, [name, searchParams]);

  useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked);
    }
  }, [checked]);

  const handleCheckboxChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    
    if (!searchParams) return;
    
    const params = new URLSearchParams(searchParams.toString());
    
    if (newValue) {
      params.set(name, 'true');
    } else {
      params.delete(name);
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <label className={styles.customCheckbox}>
    <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className={styles.hiddenCheckbox}
      />
      <div className={styles.checkboxDisplay}>
        {isChecked && (
          <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 1L6 12L1 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
    </label>
  );
};