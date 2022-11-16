import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/AuthSlice"
import newsReducer from "../features/NewsSlice"

const store = configureStore ({
    reducer : {
        auth : authReducer,
        news : newsReducer
    }
})

export default store;