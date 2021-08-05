import { createReducer, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import axios from 'axios'
import firebase from '../../utils/firebase'

const initialState = ''

export const UserRegister = createAsyncThunk(
  'UserRegister',
  (user, thunkAPI) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        const userFirebase = userCredential.user
        return axios
          .post('/api/user/register', {
            userFirebase,
            role: user.role,
            name: user.name,
            surname: user.surname,
          })
          .then((res) => res.data)
          .then((user) => user)
          .catch((err) => console.log(err))
      })
      .catch((error) => {
        var errorMessage = error.message
        console.log(errorMessage)
        return errorMessage
      })
  }
)

export const UserLogin = createAsyncThunk('UserLogin', (user, thunkAPI) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then((userCredentials) => {
      const { uid } = userCredentials.user
      return axios
        .get(`/api/user/${uid}`)
        .then((res) => res.data)
        .then((user) => user)
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
  // const { photoURL, refreshToken, displayName, email, uid, roles } = user
  return { payload: user }
})

export const userReducer = createReducer(initialState, {
  [UserRegister.fulfilled]: (state, action) => action.payload,
  [UserLogin.fulfilled]: (state, action) => action.payload,
  [UserLogout.fulfilled]: (state, action) => action.payload,
  [userCookie]: (state, action) => action.payload,
})
