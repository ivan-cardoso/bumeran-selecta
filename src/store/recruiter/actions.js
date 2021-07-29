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

export const getAllRecruiters = createAsyncThunk("GET_ALL_RECRUITERS", () => {
  return axios.get('/api/recruiters')
  .then((res) => res.data)
})

export const getRecruiterSearch = createAsyncThunk("GET_RECRUITER_SEARCH", (values)=>{
  return axios.post("/api/recruiters/filter", values)
  .then((res)=> res.data)
  .then((recruiters) => recruiters)
  .catch((err)=> console.log(err))
})

const recruiterReducer = createReducer([], {
  [createRec.fulfilled]: (state, action) => action.payload,
  [singleRecruiter]: (state, action) => action.payload,
  [getRecruiterSearch.fulfilled] : (state, action) => action.payload
})

export default recruiterReducer

/* 
./src/store/recruiter/actions.js
Attempted import error: 'createAsyncthunk' is not exported from '@reduxjs/toolkit'.
 */
