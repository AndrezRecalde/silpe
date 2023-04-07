import { createSlice } from "@reduxjs/toolkit";


export const busquedaSlice = createSlice({
    name: "busqueda",
    initialState: {
        title: "SILPE | Búsqueda Trámite",
        status: false,
        tramite: {},
    },
    reducers: {
        checking: (state) => {
            state.status = false;
            state.tramite = {};
        },
        onSearch: (state, { payload }) => {
            state.status = true;
            state.tramite = payload;
        },
        onClearSearch: (state) => {
            state.status = false;
            state.tramite = {};
        },

    },
});

export const { checking, onSearch, onClearSearch } = busquedaSlice.actions;
