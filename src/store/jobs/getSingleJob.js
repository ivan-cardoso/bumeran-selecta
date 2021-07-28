import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getSingleJob = createAction("SINGLE_JOB");

const singleJobReducer = createReducer(
  {},
  {
    [getSingleJob]: (state, action) => action.payload,
  }
);

export default singleJobReducer;
