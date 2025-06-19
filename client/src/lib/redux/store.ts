import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import cartReducer from './slices/cart/cartSlice'
import modalReducer from './slices/modal/modalSlice'


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()