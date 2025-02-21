import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clear: (state) => {
      state.items = [];
    },
    updateQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const items = state.items;
      
      for (let index = 0; index < items.length; index++) {
        const item = items[index];
        if (item.id == itemId) {
          if (quantity == 0) {
            // delete the item from items
            items.splice(index, 1);
          } else {
            item.quantity = quantity;  // Fixed typo here
          }
          break;
        }
      }
      state.items = items;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.itemId);
    },
  },
});

export const { addItem, removeItem, updateQuantity, clear } = cartSlice.actions;
export default cartSlice.reducer;
