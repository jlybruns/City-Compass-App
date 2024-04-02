import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    sessionExpiry: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
            state.sessionExpiry = Date.now() + 5000;         
        },
        clearSession: (state) => {
            state.currentUser = null;
            state.sessionExpiry = null;
        }
    },
});

export const userReducer = userSlice.reducer;

export const { setCurrentUser } = userSlice.actions;

export const selectCurrentUser = (state) => state.user.currentUser;