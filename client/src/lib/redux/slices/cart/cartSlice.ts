import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartItem {
  id: string | number
  title: string
  image: string
  price: number
  discountPrice?: number | null
  quantity: number
}

interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item) {
        item.quantity += 1
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item) {
        if (item.quantity === 1) {
          state.items = state.items.filter(i => i.id !== action.payload)
        } else {
          item.quantity -= 1
        }
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    clearCart: (state) => {
      state.items = []
    }
  }
})

export const { 
  addToCart, 
  incrementQuantity, 
  decrementQuantity, 
  removeFromCart,
  clearCart
} = cartSlice.actions

export default cartSlice.reducer