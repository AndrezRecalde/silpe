import { createSlice } from "@reduxjs/toolkit";

export const departamentoSlice = createSlice({
    name: "departamento",
    initialState: {
        agregadores: [],
        departamentos: [],
    },
    reducers: {
        onLoadAgregadores: (state, { payload }) => {
            state.agregadores = payload;
        },
        onClearAgregadores: (state) => {
            state.agregadores = [];
        },
        onLoadDepartamentos: (state, { payload }) => {
            state.departamentos = payload;
        },
        onClearDepartamentos: (state) => {
            state.departamentos = [];
        }
    },
});

export const { onLoadAgregadores, onClearAgregadores, onLoadDepartamentos, onClearDepartamentos } = departamentoSlice.actions;
