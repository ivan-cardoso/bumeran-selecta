import {createAsyncthunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const login = createAsyncthunk('LOGIN', (user) => {

    console.log(user)
    return axios
    .post("http://localhost:3001/api/login", user)
    .then((pass) => {
        console.log(pass)
    })
    .catch((err) => res.send(err))

})

