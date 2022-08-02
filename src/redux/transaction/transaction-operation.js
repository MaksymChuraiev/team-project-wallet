import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getAllTransactions = createAsyncThunk('transactions/getAll', async () => {
  try {
    const { data } = await axios.get('/transactions');

    return data.data.result;
  } catch (error) {
    console.log(error);
  }
});

const addTransactions = createAsyncThunk(
  'transactions/add',
  async (transaction, thunkAPI) => {
    try {
      const { data } = await axios.post('/transactions', transaction);
      thunkAPI.dispatch(getAllTransactions());

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
      thunkAPI.dispatch(getAllTransactions());

      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const getByDate = createAsyncThunk(
  'transactions/getByDate',
  async ({ month, year }, { rejectWithValue }) => {
    console.log(month);
    console.log(year);
    try {
      const response = await axios.get(
        `/transactions/statistic?month=${month}&year=${year}`
      );

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const getCategory = createAsyncThunk(
  'transactions/getCategory',
  async (_, { rejectWithValue }) => {
    try {
      const { data: response } = await axios.get('/categories');
      console.log(response);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// const updateTransactions = createAsyncThunk(
//   'transactions/update',
//   async (transaction, thunkAPI) => {
//     const { id, ...fields } = transaction;

//     try {
//       const { data } = await axios.patch(`/transactions/${id}`, fields);
//       thunkAPI.dispatch(fetchTransactions());
//       return data;
//     } catch (error) {
//       thunkAPI.rejectWithValue(error);
//     }
//   }
// );

const transactionsOperation = {
  getAllTransactions,
  addTransactions,
  deleteTransactions,
  getByDate,
  getCategory,
};

export default transactionsOperation;
