import { Container, Paper, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useBusquedaStore } from "../../hooks/useBusquedaStore";
import { LoaderPage } from "../Loader/LoaderPage";

export const ResultadoTable = () => {

    const [pending, setPending] = useState(true);

    const { tramite } = useBusquedaStore();

    const { despachos } = tramite;

    const customStyles = {
        rows: {
            style: {
                padding: '15px',

            },
        },
    }

    const columns = [
        {
            name: <Text fw={700} tt="uppercase">Departamento Destino</Text>,
            selector: (row) => row.remitente,
            wrap: true,
        },
        {
            name: <Text fw={700} tt="uppercase">Acción</Text>,
            selector: (row) =>  row.dscrpcion_accion,
            wrap: true,
        },
        {
            name: <Text fw={700} tt="uppercase">Respuesta/Observación</Text>,
            selector: (row) => row.dscrpcion_rspsta,
            wrap: true,
        },
    ];

    useEffect(() => {
		const timeout = setTimeout(() => {
			setPending(false);
		}, 800);
		return () => clearTimeout(timeout);
	}, []);

    return (
        <Container mt={20}>
            <Paper withBorder shadow="lg" radius="md" p="xs">
            <DataTable
                title={<Text fw={700} fz="md" tt="uppercase">Despachos</Text>}
                columns={columns}
                data={despachos}
                striped
                pagination
                responsive
                customStyles={customStyles}
                progressPending={pending}
			    progressComponent={<LoaderPage />}
            />
            </Paper>
        </Container>
    );
};
