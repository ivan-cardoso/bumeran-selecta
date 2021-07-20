import {configureStore} from "@reduxjs/toolkit"
import { userReducer } from './user/user'
import recruiterReducer from './recruiter/actions'
import companiesReducer from './companies/companies'


const store = configureStore({
    
    reducer: {
        recruiter: recruiterReducer,
        user: userReducer,
        companies: companiesReducer
      }
  
})

export default store
