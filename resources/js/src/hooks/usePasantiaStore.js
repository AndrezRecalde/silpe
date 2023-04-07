import Swal from 'sweetalert2';
import silpeApi from '../api/silpeApi';

export const usePasantiaStore = (pasantia) => {

   const startCreatePasantia = async() => {
    try {
        await silpeApi.post("/create/pasantia", pasantia);
        Swal.fire({
            icon: "success",
            title: "¡Pasantía enviada con éxito!",
            showConfirmButton: false,
            timer: 1000,
        });
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.response ? error.response.data.message : error,
            confirmButtonColor: "#c81d11",
        });
    }
   }

  return {
    startCreatePasantia
  }
}
