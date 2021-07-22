import {configureStore} from "@reduxjs/toolkit"
import { userReducer } from './user/user'
import recruiterReducer from './recruiter/actions'
import jobsReducer from "./jobs/jobs"
import aditionalDataReducer from "./aditionalData/actions"
import companiesReducer from './companies/companies'
import singleCompanyReducer from "./companies/singleCompany";
import singleJobReducer from "./jobs/singleJob"
import getAllJobsByCompanyReducer from "./companies/jobsCompany";


const store = configureStore({
  reducer: {
    recruiter: recruiterReducer,
    user: userReducer,
    jobs: jobsReducer,
    aditionalData: aditionalDataReducer,
    companies: companiesReducer,
    singleCompany: singleCompanyReducer,
    singleJob : singleJobReducer,
    jobsCompany: getAllJobsByCompanyReducer,
  },
});

export default store
