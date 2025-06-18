export interface IFilterInputProps {
  placeholder: string
  minValue?: number
  maxValue?: number
  priceFilter?: boolean
  className?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  paramName: string;
  debounceTime?: number; 
}