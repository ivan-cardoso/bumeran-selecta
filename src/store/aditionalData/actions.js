import { createReducer, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllAditionalData = createAsyncThunk("GET_ALL_ADITIONAL_DATA", ()=>{
    const call1 = axios.get("/api/aditionalData/areas")
    const call2 = axios.get("/api/aditionalData/states")
    const call3 = axios.get("/api/aditionalData/seniorities")
    const call4 = axios.get("/api/aditionalData/modalities")
    const call5 = axios.get("/api/aditionalData/typeOfEmployeds")

    /* return axios.get("/api/aditionalData/areas")
    .then((res)=> res.data)
    .then((areas) => areas)
    .catch((err) => console.log(err)) */

    return axios.all([call1, call2, call3, call4, call5])
    .then(axios.spread((...responses)=>{
        const areas = responses[0].data
        const states = responses[1].data
        const seniorities = responses[2].data
        const modalities = responses[3].data
        const type = responses[4].data
        return {areas, states, seniorities, modalities, type}
    }))
    .then((data)=> data)
    .catch((err) => console.log(err))
})

const aditionalDataReducer =  createReducer([], {
    [getAllAditionalData.fulfilled]: (state, action) => action.payload,
})

export default aditionalDataReducer