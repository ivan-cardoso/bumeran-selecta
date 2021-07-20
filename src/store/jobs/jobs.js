import { createReducer, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import axios from 'axios'

export const createJob = createAsyncThunk("CREATE_JOB", (jobDetails) => {
    axios.post("/api/jobs/create", jobDetails)
        .then((res) => res.data)
        .then((user) =>{
            console.log(user)
            return user
        })
        .catch((err) => console.log(err))
})


const jobsReducer = createReducer({},{
    [createJob.fulfilled] : (state, action) => state = action.payload,
})

export default jobsReducer