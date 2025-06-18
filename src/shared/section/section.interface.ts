export interface ISectionProps {
  children: React.ReactNode;
  title: string
  nav_text: string
  nav_link: string
  nav_disabled?: boolean
  isH1?: boolean
  className?: string
  remove_heading?: boolean
  topMargin?: boolean
}