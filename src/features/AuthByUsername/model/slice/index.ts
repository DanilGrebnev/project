import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { loginByUserName } from '../services/loginByUserName'
import { type ILoginSchema } from '../types'

const initialState: ILoginSchema = {
    username: '',
    password: '',
    isLoading: false,
    error: '',
}

export const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUserName(state, action: PayloadAction<string>): void {
            state.username = action.payload
        },
        setPassword(state, action: PayloadAction<string>): void {
            state.password = action.payload
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(loginByUserName.pending, (state, action) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(loginByUserName.fulfilled, (state, action) => {
                state.isLoading = false
            })
            .addCase(loginByUserName.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: loginActions, reducer: loginReducer } = LoginSlice