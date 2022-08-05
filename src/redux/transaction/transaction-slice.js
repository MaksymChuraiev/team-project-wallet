import { createSlice } from '@reduxjs/toolkit';
import transactionOperation from './transaction-operation';

const initialState = {
  items: [],
  isLoading: true,
  categories: {},
  totalTransactions: {},
  isModalAddTransOpen: false,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    ModalAddTrans(state, action) {
      state.isModalAddTransOpen = action.payload;
    },
  },

  extraReducers: {
    [transactionOperation.getAllTransactions.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [transactionOperation.getAllTransactions.pending]: state => {
      state.isLoading = true;
    },
    [transactionOperation.getAllTransactions.rejected]: (state, action) => {
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
    [transactionOperation.getByDate.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.totalTransactions = action.payload;
    },
    [transactionOperation.getByDate.pending]: state => {
      state.isLoading = true;
    },
    [transactionOperation.getByDate.rejected]: state => {
      state.isLoading = false;
    },
    [transactionOperation.getCategory.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.categories = payload;
    },
    [transactionOperation.getCategory.pending]: state => {
      state.isLoading = true;
    },
    [transactionOperation.getCategory.rejected]: state => {
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
