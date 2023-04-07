import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import silpeApi from "../api/silpeApi";
import { onClearServicios, onLoadServicios } from "../store/institucion/servicioSlice";

export const useServicioStore = () => {
    const { servicios } = useSelector((state) => state.servicio);

    const dispatch = useDispatch();

    const startLoadServicios = async (departamento_id) => {
        try {
            const { data } = await silpeApi.post("/servicios", { departamento_id });
            const { servicios } = data;
            dispatch(onLoadServicios(servicios));
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response ? error.response.data.message : error,
                confirmButtonColor: "#c81d11",
            });
        }
    };

    const startClearServicios = () => {
        dispatch(onClearServicios());
    }

    return {
        servicios,

        startLoadServicios,
        startClearServicios
    };
};
