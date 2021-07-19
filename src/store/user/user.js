import { createReducer, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = ''

export const UserRegister = createAsyncThunk(
  'UserRegister',
  (user, thunkAPI) => {
    return axios
      .post('/api/auth/register', user)
      .then((res) => res.data)
      .then((user) => user)
      .catch((err) => console.log(err))
  }
)

export const UserLogin = createAsyncThunk(
  'UserLogin',
  async (user, thunkAPI) => {
    const axiosresult = await axios.post('/api/auth/login', user)
    const axiosUser = await axiosresult.data
    return axiosUser
  }
)

//esta ruta falta
export const UserLogout = createAsyncThunk('UserLogout', () => {
  return axios({
    method: 'put',
    url: '/api/auth/logout',
  })
    .then((res) => res.data)
    .then((user) => user)
    .catch((err) => err)
})

export const userCookie = createAction('userCookie', (user) => ({
  payload: user,
}))

export const userReducer = createReducer(initialState, {
  [UserRegister.fulfilled]: (state, action) => action.payload,
  [UserLogin.fulfilled]: (state, action) => action.payload,
  [UserLogin.rejected]: (state, action) => '',
  [UserLogout.fulfilled]: (state, action) => action.payload,
  [userCookie]: (state, action) => action.payload,
})
