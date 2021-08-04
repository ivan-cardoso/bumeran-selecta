import {
  createReducer,
  createAction,
  createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios"

export const getSingleJob = createAction("SINGLE_JOB");

export const getOneSingleJob = createAsyncThunk("GET_ONE_SINGLEJOB", (id)=>{
  console.log(id)
  return axios.get(`/api/jobs/singleJob/${id}`)
  .then((res)=> res.data)
  .then((job) => job)
  .catch((err)=> console.log(err))
});

const singleJobReducer = createReducer(
  {},
  {
    [getSingleJob]: (state, action) => action.payload,
    [getOneSingleJob.fulfilled] : (state, action) => action.payload
  }
);

export default singleJobReducer;
