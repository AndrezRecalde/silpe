import { createSlice } from "@reduxjs/toolkit";


export const stateSlice = createSlice({
    name: "state",
    initialState: {
        cantones:[],
        parroquias: [],
        recintos: []
    },
    reducers: {
        onLoadCantones: (state, { payload }) => {
            state.cantones = payload;
        },
        onLoadParroquias: (state, { payload }) => {
            state.parroquias = payload;
        },
        onLoadRecintos: (state, { payload }) => {
            state.recintos = payload;
        },
        onClearStates: (state) => {
            state.cantones = [];
            state.parroquias = [];
            state.recintos = [];
        }
    },
});

export const { onLoadCantones, onLoadParroquias, onLoadRecintos, onClearStates } = stateSlice.actions;
