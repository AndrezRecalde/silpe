import { createSlice } from "@reduxjs/toolkit";

export const gestionSlice = createSlice({
    name: "gestion",
    initialState: {
        gestiones: [],
    },
    reducers: {
        onLoadGestiones: (state, { payload }) => {
            state.gestiones = payload;
        },
        onClearGestiones: (state) => {
            state.gestiones = [];
        },
    },
});

export const { onLoadGestiones, onClearGestiones } = gestionSlice.actions;
