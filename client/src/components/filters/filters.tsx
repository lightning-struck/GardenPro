import React from 'react'
import s from './filters.module.scss'
import { FilterInput } from '@/shared/filter-input/filter-input'
import { CustomCheckbox as Checkbox } from '@/shared/checkbox/checkbox'
import { Dropdown } from '@/shared/dropdown/dropdown'
import { sorting_list } from '@/lib/config/data'
import { IFiltersProps } from './filters.interface'
export const Filters: React.FC<IFiltersProps> = (props) => {
  const { discountFilter = true, priceFilter = true, sortFilter = true } = props
  return (
    <div className={s.filters}>
      {priceFilter && <div className={s.row}>
        <p className={s.label}>Price</p>
        <div className={s.price_inputs}>
          <FilterInput paramName='priceFrom' minValue={0} placeholder='from' priceFilter />
          <FilterInput paramName='priceTo' placeholder='to' priceFilter />
        </div>
      </div>}
      {discountFilter && <div className={s.row}>
        <p className={s.label}>Discounted items</p>
        <Checkbox name='isDiscounted' />
      </div>}
      {sortFilter && <div className={s.row}>
        <p className={s.label}>Sorted</p>
        <Dropdown {...sorting_list} />
      </div>}

    </div>
  )
}
