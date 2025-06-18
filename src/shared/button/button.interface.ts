export interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'green' | 'white' | 'outlined';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  isLink?: boolean
  href?: string
}