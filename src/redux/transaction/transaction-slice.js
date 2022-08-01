import { createSlice } from '@reduxjs/toolkit';
import transactionOperation from './transaction-operation';

const initialState = {
  items: [],
  isLoading: true,
  isModalAddTransOpen: false,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,

  extraReducers: {
    [transactionOperation.fetchTransactions.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [transactionOperation.fetchTransactions.pending]: state => {
      state.isLoading = true;
    },
    [transactionOperation.fetchTransactions.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [transactionOperation.addTransactions.fulfilled]: (state, action) => {
      state.items = [...state.items, action.payload];
      state.isLoading = false;
    },
    [transactionOperation.addTransactions.pending]: state => {
      state.isLoading = true;
    },
    [transactionOperation.addTransactions.rejected]: state => {
      state.isLoading = false;
    },
    [transactionOperation.deleteTransactions.fulfilled]: state => {
      state.isLoading = false;
    },
    [transactionOperation.deleteTransactions.pending]: state => {
      state.isLoading = true;
    },
    [transactionOperation.deleteTransactions.rejected]: state => {
      state.isLoading = false;
    },
    // [transactionOperation.updateTransactions.fulfilled]: (state, action) => {
    //   state.items.map(contact =>
    //     contact.id === action.payload.id ? action.payload : contact
    //   );
    //   state.isLoading = false;
    // },
    // [transactionOperation.updateTransactions.pending]: state => {
    //   state.isLoading = true;
    // },
    // [transactionOperation.updateTransactions.rejected]: state => {
    //   state.isLoading = false;
    // },
  },
});

export default transactionsSlice.reducer;
