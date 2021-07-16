import {configureStore} from "@reduxjs/toolkit"
import { userReducer } from './user/user'
import recruiterReducer from './recruiter/actions'


const store = configureStore({
    
    reducer: {
        recruiter: recruiterReducer,
        user: userReducer,
        
      }
  
})

export default store
