import { configureStore } from "@reduxjs/toolkit";
import { tramiteSlice } from "./tramite/tramiteSlice";


export const store = configureStore({
    reducer: {
        tramite: tramiteSlice.reducer
    }
});