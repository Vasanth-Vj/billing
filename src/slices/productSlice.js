import { createSlice } from "@reduxjs/toolkit";
import { format, startOfDay, endOfDay, startOfMonth, endOfMonth } from 'date-fns';

const initialState = {
  products: [],
  totalAmount: 0,
  discount: 0,
  billingPrice: 0,
  customer: {
    name: "",
    phone: "",
    location: "",
    date: new Date().toLocaleDateString(),
  },
  billingRecords: [],
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
    addBillingRecord(state, action) { 
      state.billingRecords.push(action.payload);
    },
    clearProducts(state) { 
      state.products = [];
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  applyDiscount,
  updateCustomerDetails,
  addBillingRecord,
  clearProducts,
} = productSlice.actions;
export default productSlice.reducer;

// Selectors
export const selectTodayTotals = (state) => {
  const todayStart = startOfDay(new Date());
  const todayEnd = endOfDay(new Date());
  const todayRecords = state.products.billingRecords.filter(record =>
    new Date(record.date) >= todayStart && new Date(record.date) <= todayEnd
  );
  
  return todayRecords.reduce((totals, record) => {
    if (record.paymentStatus === "Pay Now") {
      totals.payNow += record.billingPrice;
    } else {
      totals.payLater += record.billingPrice;
    }
    totals.total += record.billingPrice;
    return totals;
  }, { payNow: 0, payLater: 0, total: 0 });
};

export const selectOneMonthTotals = (state) => {
  const monthStart = startOfMonth(new Date());
  const monthEnd = endOfMonth(new Date());
  const monthRecords = state.products.billingRecords.filter(record =>
    new Date(record.date) >= monthStart && new Date(record.date) <= monthEnd
  );

  return monthRecords.reduce((totals, record) => {
    if (record.paymentStatus === "Pay Now") {
      totals.payNow += record.billingPrice;
    } else {
      totals.payLater += record.billingPrice;
    }
    totals.total += record.billingPrice;
    return totals;
  }, { payNow: 0, payLater: 0, total: 0 });
};
