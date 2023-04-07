import { configureStore } from "@reduxjs/toolkit";
import { departamentoSlice } from "./institucion/departamentoSlice";
import { gestionSlice } from "./institucion/gestionSlice";
import { institucionSlice } from "./institucion/institucionSlice";
import { servicioSlice } from "./institucion/servicioSlice";
/* import { pasantiaSlice } from "./pasantia/pasantiaSlice"; */
import { stateSlice } from "./state/stateSlice";
import { busquedaSlice } from "./tramite/busquedaSlice";
import { solicitudSlice } from "./tramite/solicitudSlice";
import { uiSlice } from "./ui/uiSlice";


export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        busqueda: busquedaSlice.reducer,
        state: stateSlice.reducer,
        gestion: gestionSlice.reducer,
        departamento: departamentoSlice.reducer,
        servicio: servicioSlice.reducer,
        institucion: institucionSlice.reducer,
        /* pasantia: pasantiaSlice.reducer, */
        solicitud: solicitudSlice.reducer
    }
});
