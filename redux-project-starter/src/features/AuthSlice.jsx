import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user : null,
}

const AuthSlice = createSlice({
    name : "auth",
    initialState: initialState,
    reducers : {
        setUser:(state, {payload}) =>{
            state.user = payload;
        },
        clearUser:(state) =>{
            state.user = null;
        },
    }
})
export const {setUser, clearUser} = AuthSlice.actions;
export default AuthSlice.reducer;