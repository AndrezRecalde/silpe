import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import silpeApi from "../api/silpeApi";
import {
    onClearStates,
    onLoadCantones,
    onLoadParroquias,
    onLoadRecintos,
} from "../store/state/stateSlice";

export const useStateStore = () => {
    const { cantones, parroquias, recintos } = useSelector(
        (state) => state.state
    );

    const dispatch = useDispatch();

    const startLoadCantones = async () => {
        try {
            const { data } = await silpeApi.get("/cantones");
            const { cantones } = data;
            dispatch(onLoadCantones(cantones));
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response ? error.response.data.message : error,
                confirmButtonColor: "#c81d11",
            });
        }
    };

    const startLoadParroquias = async (canton_id) => {
        try {
            const { data } = await silpeApi.post("/parroquias", { canton_id });
            const { parroquias } = data;
            dispatch(onLoadParroquias(parroquias));
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response ? error.response.data.message : error,
                confirmButtonColor: "#c81d11",
            });
        }
    };

    const startLoadRecintos = async (parroquia_id) => {
        try {
            const { data } = await silpeApi.post("/recintos", { parroquia_id });
            const { recintos } = data;
            dispatch(onLoadRecintos(recintos));
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response ? error.response.data.message : error,
                confirmButtonColor: "#c81d11",
            });
        }
    };

    const startClearStates = () => {
        dispatch(onClearStates());
    }

    return {
        cantones,
        parroquias,
        recintos,

        startLoadCantones,
        startLoadParroquias,
        startLoadRecintos,
        startClearStates
    };
};
