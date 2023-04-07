import { createSlice } from "@reduxjs/toolkit";

export const pasantiaSlice = createSlice({
    name: "pasantia",
    initialState: {
        pasantias: []
    },
    reducers: {
        onCreatePasantia: (state, { payload }) => {
            state.pasantias = payload;
        },
        onClearPasantias: (state) => {
            state.pasantias = [];
        }
    },
});

export const { onCreatePasantia, onClearPasantias } = pasantiaSlice.actions;
