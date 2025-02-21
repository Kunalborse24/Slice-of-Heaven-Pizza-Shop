import { configureStore } from '@reduxjs/toolkit'
import cartSilce from './features/cartSilce'

export const store = configureStore({
  reducer: {
    cart:cartSilce
  },
})