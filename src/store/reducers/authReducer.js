import {createSlice} from '@reduxjs/toolkit'

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: {
        isAuthenticated: false,
        user: {},
    },
    reducers: {
        makeAuthentication: (state) => {
            state.isAuthenticated = true
        },
        makeNotAuthentication: (state) => {
            state.isAuthenticated = false
        },
        setAuthenticationUser: (state, PayloadAction) => {
            state.user = PayloadAction.payload
        },
    },
})

export const {makeAuthentication, makeNotAuthentication, setAuthenticationUser} = authenticationSlice.actions


export default authenticationSlice.reducer