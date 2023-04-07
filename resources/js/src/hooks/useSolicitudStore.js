import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2';
import silpeApi from '../api/silpeApi';
import { onCloseModalAdvertencia, onCloseModalRuta, onLoading, onLoadSolicitud } from '../store/tramite/solicitudSlice';

export const useSolicitudStore = () => {

    const { isOpenModalAdvertencia, loading, solicitud, isOpenModalRuta } = useSelector(state => state.solicitud);

    const dispatch = useDispatch();

    const startCreateSolicitud = async(values) => {
        dispatch(onLoading());
        try {
            const { data } = await silpeApi.post("/create/solicitud", values);
            const { solicitud } = data;
            dispatch(onLoadSolicitud(solicitud));
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response ? error.response.data.message : error,
                confirmButtonColor: "#c81d11",
            });
        }
    }


    const startCreatePasantia = async(pasantia) => {
        dispatch(onLoading());
        try {
            const { data } = await silpeApi.post("/create/pasantia", pasantia );
            const { pasantes } = data;
            dispatch(onLoadSolicitud( pasantes ));
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response ? error.response.data.message : error,
                confirmButtonColor: "#c81d11",
            });
        }
    }

    const startDownloadRuta = async({id}) => {
        try {
            const response = await silpeApi.post("/download/pasantia", {id}, {responseType:"blob"} );
            const url = window.URL.createObjectURL(new Blob([response.data],{type:'application/pdf'}));
            window.open(url, "_blank");
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response ? error.response.data.message : error,
                confirmButtonColor: "#c81d11",
            });
        }
    }

    const startDownloadSolicitud = async({id}) => {
        try {
            const response = await silpeApi.post("/download/solicitud", {id}, {responseType:"blob"} );
            const url = window.URL.createObjectURL(new Blob([response.data],{type:'application/pdf'}));
            window.open(url, "_blank");
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response ? error.response.data.message : error,
                confirmButtonColor: "#c81d11",
            });
        }
    }

    const startCloseModalAdvertencia = () => {
        dispatch(onCloseModalAdvertencia());
    }

    const startCloseModalRuta = () => {
        dispatch(onCloseModalRuta());
    }

  return {
    isOpenModalAdvertencia,
    loading,
    solicitud,
    isOpenModalRuta,

    startCreateSolicitud,
    startCreatePasantia,
    startDownloadRuta,
    startDownloadSolicitud,
    startCloseModalAdvertencia,
    startCloseModalRuta
  }
}
