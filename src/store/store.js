import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

const appStore = configureStore({
    reducer: {
        authentication: authReducer
    }
});

export default appStore;