import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchTransactions = createAsyncThunk('transactions/fetch', async () => {
  try {
    const { data } = await axios.get('/transactions');
    return data;
  } catch (error) {
    console.log(error);
  }
});

const addTransactions = createAsyncThunk(
  'transactions/add',
  async (transaction, thunkAPI) => {
    try {
      const { data } = await axios.post('/transactions', transaction);
      thunkAPI.dispatch(fetchTransactions());
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const deleteTransactions = createAsyncThunk(
  'transactions/delete',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/transactions/${id}`);
      thunkAPI.dispatch(fetchTransactions());
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const updateTransactions = createAsyncThunk(
  'transactions/update',
  async (transaction, thunkAPI) => {
    const { id, ...fields } = transaction;

    try {
      const { data } = await axios.patch(`/transactions/${id}`, fields);
      thunkAPI.dispatch(fetchTransactions());
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const transactionsOperation = {
  fetchTransactions,
  addTransactions,
  deleteTransactions,
  updateTransactions,
};

export default transactionsOperation;
