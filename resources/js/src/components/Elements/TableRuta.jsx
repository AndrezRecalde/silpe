import { Table, Text } from "@mantine/core";

export const TableRuta = ({ solicitud }) => {

    /* Obtener año actual */
    const year = new Date().getFullYear();

    return (
        <Table striped withBorder withColumnBorders mt={15}>
            <thead>
                <tr>
                    <th>
                        <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                            Año de Ruta
                        </Text>
                    </th>
                    <th>
                        <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                            Número de Ruta
                        </Text>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr key="">
                    <td>
                        <Text fz="lg" fw={700}>
                            {year}
                        </Text>
                    </td>
                    <td>
                        <Text fz="lg" fw={700}>
                            {solicitud.cnsctvo_rta}
                        </Text>
                    </td>
                </tr>
            </tbody>
        </Table>
    );
};
