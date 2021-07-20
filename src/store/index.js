import {configureStore} from "@reduxjs/toolkit"
import { userReducer } from './user/user'
import recruiterReducer from './recruiter/actions'
import jobsReducer from "./jobs/jobs"
import aditionalDataReducer from "./aditionalData/actions"


const store = configureStore({
    
    reducer: {
        recruiter: recruiterReducer,
        user: userReducer,
        jobs : jobsReducer,
        aditionalData : aditionalDataReducer
      }
})

export default store
