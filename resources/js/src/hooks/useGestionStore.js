import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2';
import silpeApi from '../api/silpeApi';
import { onClearGestiones, onLoadGestiones } from '../store/institucion/gestionSlice';

export const useGestionStore = () => {
    const { gestiones } = useSelector(state => state.gestion);

    const dispatch = useDispatch();

    const startLoadGestiones = async () => {
        try {
            const { data } = await silpeApi.get("/gestiones");
            const { gestiones } = data;
            dispatch(onLoadGestiones(gestiones));
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response ? error.response.data.message : error,
                confirmButtonColor: "#c81d11",
            });
        }
    }

    const startClearGestiones = () => {
        dispatch(onClearGestiones());
    }

  return {
    gestiones,

    startLoadGestiones,
    startClearGestiones
  }
}
