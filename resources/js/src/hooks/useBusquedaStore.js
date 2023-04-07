import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2';
import silpeApi from '../api/silpeApi';
import { checking, onClearSearch, onSearch } from '../store/tramite/busquedaSlice';

export const useBusquedaStore = () => {

   const { title, tramite, status } =  useSelector(state => state.busqueda);

    const dispatch = useDispatch();

    const startSearchTramite = async(cnsctvo_rta) => {
        setTimeout(() => {
            dispatch(checking());
        });

        try {
            const { data } = await silpeApi.post("/consulta/tramite", { cnsctvo_rta });
            const { ingreso, despachos } = data;
            dispatch(onSearch({ ingreso, despachos }));
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response ? error.response.data.message : error,
                confirmButtonColor: "#c81d11",
            });
        }
    }

    const startClearSearch = () => {
        dispatch(onClearSearch());
    }

  return {
    title,
    tramite,
    status,

    startSearchTramite,
    startClearSearch
  }
}
