import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSingleRecruiter = createAsyncThunk(
  "GET-SINGLE-RECRUITER",
  (id) => {
    return axios
      .get(`/api/recruiters/${id}`)
      .then((res) => res.data)
      .then((values) => values)
      .catch((err) => {
        console.log(err);
      });
  }
);

const singleRecruiterReducer = createReducer(
  {},
  {
    [getSingleRecruiter.fulfilled]: (state, action) => action.payload,
  }
);

export default singleRecruiterReducer;
