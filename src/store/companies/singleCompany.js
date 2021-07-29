import { createReducer, createAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const singleCompany = createAction('singleCompany')

export const getOneSingleCompany = createAsyncThunk(
  'getOneSingleCompany',
  (id) => {
    return axios
      .get(`/api/companies/jobs/${id}`)
      .then((res) => res.data)
      .then((values) => values)
      .catch((err) => {
        console.log(err)
      })
  }
)

const singleCompanyReducer = createReducer(
  {},
  {
    [singleCompany]: (state, action) => action.payload,
    [getOneSingleCompany.fulfilled]: (state, action) => action.payload,
  }
)

export default singleCompanyReducer
