import { createReducer, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import axios from 'axios'

export const createJob = createAsyncThunk("CREATE_JOB", (jobDetails) => {
    return axios.post("/api/jobs/create", jobDetails)
        .then((res) => res.data)
        .then((data) =>{
            return data
        })
        .catch((err) => console.log(err))
})

export const getAllJobs = createAsyncThunk("GET_ALL_JOBS", ()=>{
    return axios.get("/api/jobs/")
    .then((res)=> res.data)
    .then((jobs)=> jobs)
    .catch((err)=> console.log(err))
})

export const deleteJob = createAsyncThunk("DELETE_JOB", (id)=>{
    return axios.delete(`/api/jobs/delete/${id}`)
    .then((res)=> res.data)
    .then((job)=> job)
    .catch((err)=> console.log(err))
})

export const updateJob = createAsyncThunk("UPDATE_JOB", (value)=>{
    // console.log("Values", value)
    return axios.put(`/api/jobs/update/${value.id}`, value.values)
    .then((res)=>res.data)
    .then((job)=>{
        // console.log(job) 
        return job
    })
    .catch((err)=> console.log(err))
})

export const getJobsSearch = createAsyncThunk(
  "GET_JOBS_SEARCH",
  async (search) => {
    try {
      const jobs = await axios.get(`api/jobs/${search}`);
      return jobs.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const createJobReducer = createReducer({},{
    [createJob.fulfilled] : (state, action) => action.payload,
})
const jobsReducer = createReducer([], {
  [getAllJobs.fulfilled]: (state, action) => action.payload,
  [getJobsSearch.fulfilled]: (state, action) => action.payload,
});
const deleteJobReducer = createReducer({}, {
    [deleteJob.fulfilled] : (state, action)=> action.payload
})  
const updateJobReducer = createReducer({}, {
    [updateJob.fulfilled] : (state, action) => action.payload
})



export default jobsReducer