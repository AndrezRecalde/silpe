import { createSlice } from "@reduxjs/toolkit";

/* Slice para Solicitudes de Servicios y Pasantías */

export const solicitudSlice = createSlice({
    name: "solicitud",
    initialState: {
        title: "SILPE | Solicitud",
        isOpenModalAdvertencia: true,

        loading: false,
        solicitud: {},
        isOpenModalRuta: false,
    },
    reducers: {
        onCloseModalAdvertencia: (state) => {
            state.isOpenModalAdvertencia = false;
        },

        onLoading: (state) => {
            state.loading = true;
        },

        onLoadSolicitud: (state, { payload }) => {
            state.solicitud = payload;
            state.loading = false;
            state.isOpenModalRuta = true;
        },

        onCloseModalRuta: (state) => {
            state.solicitud = {};
            state.isOpenModalRuta = false;
        }
    },
});

export const {
    onCloseModalAdvertencia,
    onLoading,
    onLoadSolicitud,
    onCloseModalRuta
} = solicitudSlice.actions;
