export interface IDropdownProps {
  defaultValue: number
  options: IDropDownOption[]
  name: string
}

export interface IDropDownOption{
  id: number
  value: string
}