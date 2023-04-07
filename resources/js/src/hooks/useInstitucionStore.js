import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import silpeApi from "../api/silpeApi";
import { onClearInstituciones, onLoadInstituciones } from "../store/institucion/institucionSlice";

export const useInstitucionStore = () => {

    const { instituciones } = useSelector((state) => state.institucion);

    const dispatch = useDispatch();

    const startLoadInstituciones = async() => {
        try {
            const { data } = await silpeApi.get("instituciones");
            const { instituciones } = data;
            dispatch(onLoadInstituciones(instituciones));
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response ? error.response.data.message : error,
                confirmButtonColor: "#c81d11",
            });
        }
    }

    const startLoadComunidades = async() => {
        try {
            const { data } = await silpeApi.get("comunidades");
            const { comunidades } = data;
            dispatch(onLoadInstituciones(comunidades));
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response ? error.response.data.message : error,
                confirmButtonColor: "#c81d11",
            });
        }
    }

    const startClearInstituciones = () => {
        dispatch(onClearInstituciones());
    }

    return {
        instituciones,

        startLoadInstituciones,
        startLoadComunidades,
        startClearInstituciones
    };
};
