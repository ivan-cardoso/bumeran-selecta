import {configureStore} from "@reduxjs/toolkit"




const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {


    }
})

export default store