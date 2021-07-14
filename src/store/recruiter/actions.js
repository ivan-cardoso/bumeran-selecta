/* import { createReducer, createAsyncthunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createRec = createAsyncthunk("CREATE_REC", () => {
  return axios.get().then((res) => res.data);
});

const recruiterReducer = createReducer([], {
  [createRec.fulfilled]: (state, action) => action.payload,
});

export default recruiterReducer */


/* ./src/store/recruiter/actions.js
Attempted import error: 'createAsyncthunk' is not exported from '@reduxjs/toolkit'. */
