import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalAmount: 0,
  discount: 0,
  billingPrice: 0,
  customer: {
    name: "",
    location: "",
    date: new Date().toLocaleDateString(),
  },
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = {
        ...action.payload,
        id: action.payload.id || Date.now(),
      };
      state.products.push(product);
      state.totalAmount += product.totalAmount;
      state.billingPrice = state.totalAmount - state.discount;
    },
    deleteProduct: (state, action) => {
      const productId = action.payload;
      const productToDelete = state.products.find(
        (product) => product.id === productId
      );

      state.products = state.products.filter(
        (product) => product.id !== productId
      );

      if (productToDelete) {
        state.totalAmount -= productToDelete.totalAmount;
        state.billingPrice = state.totalAmount - state.discount;
      }
    },
    applyDiscount: (state, action) => {
      state.discount = action.payload;
      state.billingPrice = state.totalAmount - state.discount;
    },
    updateCustomerDetails: (state, action) => {
      state.customer = { ...state.customer, ...action.payload };
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  applyDiscount,
  updateCustomerDetails,
} = productSlice.actions;
export default productSlice.reducer;
