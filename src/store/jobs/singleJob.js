import { createReducer, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import axios from 'axios'


export const singleJob = createAction("SINGLE_JOB")

const singleJobReducer = createReducer({}, {
    [singleJob] : (state, action)=> action.payload
})

export default singleJobReducer