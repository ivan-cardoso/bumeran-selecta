import { createReducer, createAction } from "@reduxjs/toolkit";

export const singleCompany = createAction("singleCompany");

const singleCompanyReducer = createReducer(
  {},
  {
    [singleCompany]: (state, action) => action.payload,
  }
);

export default singleCompanyReducer;
