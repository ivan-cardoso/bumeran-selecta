import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getCompanies = createAsyncThunk("GET_COMPANIES", async () => {
  try {
    const companies = await axios.get("api/companies/");
    return companies.data;
  } catch (err) {
    console.log(err);
  }
});

export const getCompaniesSearch = createAsyncThunk(
  "GET_COMPANIES_SEARCH",
  async (search) => {
    try {
      const companies = await axios.get(`api/companies/${search}`);
      return companies.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const createCompany = createAsyncThunk(
  "CREATE_COMPANY",
  async (companyValue) => {
    try {
      const newCompany = await axios.post("api/companies/", companyValue);
      return newCompany.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const updateCompany = createAsyncThunk(
  "UPDATE_COMPANY",
  async (companyValue) => {
    try {
      const newCompany = await axios.put(
        `api/companies/${companyValue.id}`,
        companyValue
      );
      return newCompany.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const singleCompany = createAction("singleCompany");

const companiesReducer = createReducer([], {
  [getCompanies.fulfilled]: (state, action) => action.payload,
  [getCompaniesSearch.fulfilled]: (state, action) => action.payload,
  [createCompany.fulfilled]: (state, action) => action.payload,
  [updateCompany.fulfilled]: (state, action) => action.payload,
  [singleCompany]: (state, action) => action.payload,
});

export default companiesReducer;
