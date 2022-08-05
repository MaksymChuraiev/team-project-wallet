import axios from 'axios';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

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

  async ({ months = '', year = '' }, { rejectWithValue }) => {
    console.log('month,', months);
    console.log('year', year);
    try {
      const response = await axios.get(
        `/transactions/statistic?month=${months}&year=${year}`
        // `/transactions/statistic`
      );
      console.log('response', response);
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
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const ModalAddTrans = createAction('transactions/ModalAddTrans');

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
  ModalAddTrans,
};

export default transactionsOperation;
