import { createReducer, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = ''

export const getAll = createAsyncThunk('getAll', () => {
  return axios
    .get('/api/user/all')
    .then((res) => res.data)
    .then((users) => users)
    .catch((err) => console.log(err))
})

export const allUserReducer = createReducer(initialState, {
  [getAll.fulfilled]: (state, action) => action.payload,
})
