import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2";
import silpeApi from "../api/silpeApi";
import { onClearAgregadores, onClearDepartamentos, onLoadAgregadores, onLoadDepartamentos } from "../store/institucion/departamentoSlice";

export const useDepartamentoStore = () => {

    const { agregadores, departamentos, tthh } = useSelector(state => state.departamento);

    const dispatch = useDispatch();

    const startLoadAgregadores = async() => {
        try {
            const { data } = await silpeApi.get("agregadores");
            const { agregadores } = data;
            dispatch(onLoadAgregadores(agregadores));
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response ? error.response.data.message : error,
                confirmButtonColor: "#c81d11",
            });
        }
    }

    const startLoadDepartamentos = async() => {
        try {
            const { data } = await silpeApi.get("departamentos");
            const { departamentos } = data;
            dispatch(onLoadDepartamentos(departamentos));
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response ? error.response.data.message : error,
                confirmButtonColor: "#c81d11",
            });
        }
    }


    const startClearAgregadores = () => {
        dispatch(onClearAgregadores());
    }

    const startClearDepartamentos = () => {
        dispatch(onClearDepartamentos());
    }




  return {
    agregadores,
    departamentos,
    tthh,

    startLoadAgregadores,
    startLoadDepartamentos,

    startClearAgregadores,
    startClearDepartamentos,
  }
}
