export type ProductCounter = {
  value: number
  setValue: (value: number | ((prev: number) => number)) => void
}