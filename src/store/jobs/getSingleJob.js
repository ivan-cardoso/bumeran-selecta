import {
  createReducer,
  createAction,
} from "@reduxjs/toolkit";

export const getSingleJob = createAction("SINGLE_JOB");

const singleJobReducer = createReducer(
  {},
  {
    [getSingleJob]: (state, action) => action.payload,
  }
);

export default singleJobReducer;
