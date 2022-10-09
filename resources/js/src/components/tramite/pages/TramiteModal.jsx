import { useTramiteStore } from '../../../hooks/useTramiteStore';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';


import '../../../styles/index.css';



const style = {
    position: 'absolute',
    top: '20px',
    bottom: '20px',
    width: '100%',
    bgcolor: 'background.paper',
    boxShadow: 25,
    p: 3,
    overflowY: 'auto'
};

const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
}));


export const TramiteModal = () => {

    const { isOpenModal, onCloseModal, data } = useTramiteStore();

    const { ingresos, despachos } = data;

    const handleClose = () => {
        onCloseModal();
    };


    return (
        <>
            <Modal
                open={isOpenModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="overflow-auto"
            >
                <Box sx={style} >
                    <Button variant="text" onClick={handleClose} disableElevation>Click - Nueva Consulta</Button >
                    <div className="card">
                        <div className="card-header">
                            Numero de ruta: {ingresos?.cnsctvo_rta}
                        </div>
                        <div className="card-body">

                            <div className="row">
                                <div className="col-lg-2 col-md-2 col-sm-6">
                                    <Div>{"Solicitante: "}</Div>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-6">
                                    <p className="card-text p-1">{ingresos?.doc_de}</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-2 col-md-2 col-sm-6">
                                    <Div>{"Asunto: "}</Div>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-6">
                                    <p className="card-text p-1">{ingresos?.asnto}</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-2 col-md-2 col-sm-6">
                                    <Div>{"Fecha Recepción: "}</Div>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-6">
                                    <p className="card-text p-1">{ingresos?.fcha_rcpcion}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <table className="table table-success table-striped-columns">
                            <thead>
                                <tr>
                                    <th scope="col">Departamento Destino</th>
                                    <th scope="col">Acción</th>

                                    <th scope="col">Respuesta/Observación</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    despachos?.map(despacho => (
                                        <tr key={despacho.cnsctvo_dspcho}>
                                            <td>{despacho.remitente}</td>
                                            <td>{despacho.dscrpcion_accion}</td>

                                            <td>{despacho.dscrpcion_rspsta}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <Button variant="text" onClick={handleClose} disableElevation>Click - Nueva Consulta</Button >
                </Box>
            </Modal >
        </>
    )
}
