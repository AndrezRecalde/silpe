import tramiteApi from '../api/tramiteApi';
import { useSelector,useDispatch } from 'react-redux';
import { checking, clearErrorMessage, onWithData, onWithoutData, closeModal } from '../store/tramite/tramiteSlice';


export const useTramiteStore = () => {
 
    const { status, despachos, errorMessage, isOpenModal, data } = useSelector( state => state.tramite );

    const dispatch = useDispatch();

    const startSearch = async(cnsctvo_rta) => {
        
        dispatch(checking());

        try {
            const { data } = await tramiteApi.post('/tramite', {cnsctvo_rta});
            console.log({data})
            dispatch(onWithData({ingresos:data.ingreso,despachos:data.despacho}));
           
        } catch (error) {
            dispatch(onWithoutData(error.response.data.msg));

            setTimeout(() => {
                dispatch(clearErrorMessage());
            }) 
        }
    }

    const onCloseModal = () => {
        dispatch(closeModal());
    }

    return {
        status,
        despachos,
        startSearch,
        errorMessage,
        isOpenModal,
        onCloseModal,
        data
    }

}
