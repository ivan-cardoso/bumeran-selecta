import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './user/user'
import recruiterReducer from './recruiter/actions'
import jobsReducer from './jobs/jobs'
import aditionalDataReducer from './aditionalData/actions'
import companiesReducer from './companies/companies'
import singleCompanyReducer from './companies/singleCompany'
import singleJobReducer from './jobs/getSingleJob'
import getAllJobsByCompanyReducer from './companies/jobsCompany'
import { allUserReducer } from './allUsers/allusers'
import singleRecruiterReducer from "./recruiter/singleRecruiter";

const store = configureStore({
  reducer: {
    recruiter: recruiterReducer,
    singleRecruiter: singleRecruiterReducer,
    user: userReducer,
    jobs: jobsReducer,
    aditionalData: aditionalDataReducer,
    companies: companiesReducer,
    singleCompany: singleCompanyReducer,
    singleJob: singleJobReducer,
    jobsCompany: getAllJobsByCompanyReducer,
    allUsers: allUserReducer,
  },
});

export default store
