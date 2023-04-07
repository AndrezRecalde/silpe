import { createSlice } from "@reduxjs/toolkit";

export const servicioSlice = createSlice({
    name: "servicio",
    initialState: {
        servicios: [],
    },
    reducers: {
        onLoadServicios: (state, { payload }) => {
            state.servicios = payload;
        },
        onClearServicios: (state) => {
            state.servicios = [];
        },
    },
});

export const { onLoadServicios, onClearServicios } = servicioSlice.actions;
