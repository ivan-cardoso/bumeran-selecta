import {configureStore} from "@reduxjs/toolkit"
import { userReducer } from './user/user'
import recruiterReducer from './recruiter/actions'
import jobsReducer from "./jobs/jobs"
import aditionalDataReducer from "./aditionalData/actions"
import companiesReducer from './companies/companies'
import singleCompanyReducer from "./companies/singleCompany";


const store = configureStore({
  reducer: {
    recruiter: recruiterReducer,
    user: userReducer,
    jobs: jobsReducer,
    aditionalData: aditionalDataReducer,
    companies: companiesReducer,
    singleCompany: singleCompanyReducer,
  },
});

export default store
