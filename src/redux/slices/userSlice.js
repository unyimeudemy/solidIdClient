import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    loading: false,
    error: false
}

export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.error = true;
        },
        logout: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = false;
        }
    }
})

// export const { loginStart, loginSuccess, loginFailure, logout } =
//   userSlice.actions;

// export default userSlice.reducer;


export const { loginStart, loginSuccess, loginFailure, logout} = userSlice.actions;
export default userSlice.reducer;
