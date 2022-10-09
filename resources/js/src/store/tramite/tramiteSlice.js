import { createSlice } from '@reduxjs/toolkit';

export const tramiteSlice = createSlice({
    name: "tramite",

    initialState: {
        isOpenModal: false,
        status: 'checking',
        data: {},
        errorMessage: undefined
    },

    reducers: {
        checking: (state) => {
            state.status = 'checking',
            state.data = {},
            state.errorMessage = undefined
        },
        onWithData: (state, action) => {
            state.status = 'with-data',
            state.data = action.payload,
            state.isOpenModal = true,
            state.errorMessage = undefined
        },
        onWithoutData: (state, action) => {
            state.status = 'without-data',
            state.data = {},
            state.errorMessage = action.payload
        },
        clearErrorMessage: (state) => {
            state.errorMessage = undefined
        },
        closeModal: (state) => {
            state.status = 'checking',
            state.isOpenModal = false,
            state.data = {}
        }
        
    }
});


export const { checking, onWithData, onWithoutData, clearErrorMessage, openModal, closeModal } = tramiteSlice.actions;