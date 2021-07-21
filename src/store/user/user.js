import { createReducer, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import axios from 'axios'
import firebase from '../../utils/firebase'

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

export const UserLogin = createAsyncThunk('UserLogin', (user, thunkAPI) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then((userCredentials) => {
      const { photoURL, refreshToken, displayName, email, uid } =
        userCredentials.user
      return { photoURL, refreshToken, displayName, email, uid }
    })
    .catch((error) => null)
})

export const UserLogout = createAsyncThunk('UserLogout', () => {
  return firebase
    .auth()
    .signOut()
    .then(() => {
      return null
    })
    .catch((error) => {
      return null
    })
})

export const userCookie = createAction('userCookie', (user) => {
  const { photoURL, refreshToken, displayName, email, uid } = user
  return { payload: { photoURL, refreshToken, displayName, email, uid } }
})

export const userReducer = createReducer(initialState, {
  [UserRegister.fulfilled]: (state, action) => action.payload,
  [UserLogin.fulfilled]: (state, action) => action.payload,
  [UserLogin.rejected]: (state, action) => '',
  [UserLogout.fulfilled]: (state, action) => action.payload,
  [userCookie]: (state, action) => action.payload,
})
