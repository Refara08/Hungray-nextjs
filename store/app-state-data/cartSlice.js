import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      //action.payload = {id, name, price, amount}
      //update total harga
      state.totalAmount += action.payload.price;

      //define existing item
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem = state.items[existingCartItemIndex];

      //what todo if there's an existing item
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount,
        };
        let updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
        state.items = updatedItems;
      } else {
        // and what to do if there are none
        state.items = state.items.concat(action.payload);
      }
    },
    removeItem(state, action) {
      //action.payload = id
      //define existing item
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      const existingCartItem = state.items[existingCartItemIndex];

      //update total harga
      state.totalAmount = state.totalAmount - existingCartItem.price;

      //what to do if existing item is more than 1
      if (existingCartItem.amount > 1) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };

        let updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;

        state.items = updatedItems;
      } else {
        // what to do if existing item is exactly 1
        state.items.splice(existingCartItemIndex, 1);
      }
    },
    updateItemNote(state, action) {
      //action.payload = {id, note}
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      const existingCartItem = state.items[existingCartItemIndex];

      const updatedItem = {
        ...existingCartItem,
        note: action.payload.note,
      };

      let updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;

      state.items = updatedItems;
    },
  },
});

export const { addItem, removeItem, updateItemNote } = cartSlice.actions;

export default cartSlice.reducer;
