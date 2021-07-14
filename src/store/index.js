import {configureStore} from "@reduxjs/toolkit"

import recruiterReducer from './recruiter/actions'


const store = configureStore({
    
    reducer: {
        recruiter: recruiterReducer

    }
})

export default store