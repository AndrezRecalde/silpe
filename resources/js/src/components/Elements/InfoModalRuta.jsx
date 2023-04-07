import { Badge, Text, UnstyledButton } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export const InfoModalRuta = ({ handleDownloadRuta }) => {
    return (
        <>
            <Text tt="uppercase" fw={500} fz="xs" mt={15} c="dimmed">
                Con tu número de ruta puedes realizar el seguimiento de tu
                trámite a tráves de nuestro servicio En Línea de{" "}
                <Link
                    to="/tramite/busqueda"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                >
                    <Badge
                        size="md"
                        color="teal"
                        radius="xl"
                        leftSection={<IconSearch size={12} stroke={3} />}
                    >
                        Consulta de Trámite{" "}
                    </Badge>
                </Link>
                o puedes acercarte a recepción para más información.
            </Text>

            <Text tt="uppercase" fw={500} fz="xs" mt={30} c="dimmed">
                Si tu ticket de número de ruta no se ha descargado
                automaticamente puedes generarlo{" "}
                <UnstyledButton onClick={() => handleDownloadRuta()}>
                    AQUÍ.
                </UnstyledButton>
            </Text>
        </>
    );
};
