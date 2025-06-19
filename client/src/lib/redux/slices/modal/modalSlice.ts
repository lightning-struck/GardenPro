import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ModalType = 'order' | 'discount' | null

interface ModalState {
  isOpen: boolean
  modalType: ModalType
}

const initialState: ModalState = {
  isOpen: false,
  modalType: null
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalType>) => {
      state.isOpen = true
      state.modalType = action.payload
    },
    closeModal: (state) => {
      state.isOpen = false

    }
  }
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer