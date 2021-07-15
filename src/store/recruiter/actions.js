import { createReducer, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import axios from 'axios'

export const createRec = createAsyncThunk('CREATE_REC', (recruiter) => {
  return axios
    .post(`/api/recruiters`, recruiter)
    .then((res) => res.data)
    .then((recruiters) => recruiters)
    .catch((err) => err)
})

export const singleRecruiter = createAction('singleRecruiter')

const recruiterReducer = createReducer([], {
  [createRec.fulfilled]: (state, action) => action.payload,
  [singleRecruiter]: (state, action) => action.payload,
})

export default recruiterReducer

/* 
./src/store/recruiter/actions.js
Attempted import error: 'createAsyncthunk' is not exported from '@reduxjs/toolkit'.
 */
