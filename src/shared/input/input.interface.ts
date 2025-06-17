import { FieldErrors, FieldPath, FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';

export interface InputProps<T extends FieldValues> 
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>;
  label?: string;
  validation?: RegisterOptions<T, FieldPath<T>>;
  errors?: FieldValues;
}