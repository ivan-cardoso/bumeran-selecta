import {configureStore} from "@reduxjs/toolkit"
import { userReducer } from './user/user'
import recruiterReducer from './recruiter/actions'
import jobsReducer from "./jobs/jobs"


const store = configureStore({
    
    reducer: {
        recruiter: recruiterReducer,
        user: userReducer,
        jobs : jobsReducer
      }
})

export default store
