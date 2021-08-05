import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllJobsByCompany = createAsyncThunk(
  "GET_ALL_JOBS_BY_COMPANY",
  async (companyId, thunkAPI) => {
    try {
      if (companyId) {
        const jobs = await axios.get(`/api/companies/jobs/${companyId}`);
        return jobs.data;
      }
    } catch (err) {
      console.log(err);
    }
  }
);

const getAllJobsByCompanyReducer = createReducer([], {
  [getAllJobsByCompany.fulfilled]: (state, action) => action.payload,
});

export default getAllJobsByCompanyReducer;
