import { createReducer, createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const singleCompany = createAction("singleCompany")

/* export const singleCompany = createAsyncThunk(
  "SINGLE_COMPANY",
  async (id) => {
    try {
      const newCompany = await axios.get(`api/companies/singlecompany/${id}`);
      return newCompany.data;
    } catch (err) {
      console.log(err);
    }
  }
); */

const singleCompanyReducer = createReducer(
  {},
  {
    [singleCompany]: (state, action) => action.payload,
  }
);

export default singleCompanyReducer;
