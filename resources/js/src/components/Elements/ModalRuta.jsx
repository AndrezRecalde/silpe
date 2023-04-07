import {
    Button,
    Group,
    Image,
    Modal,
    useMantineTheme,
} from "@mantine/core";
import { IconChecks } from "@tabler/icons-react";
import { useEffect } from "react";
import { useSolicitudStore } from "../../hooks/useSolicitudStore";
import { DivTitle } from "./DivTitle";

import logoIcon from '../../assets/images/LogoMediano.png';
import { TableRuta } from "./TableRuta";
import { InfoModalRuta } from "./InfoModalRuta";

export const ModalRuta = () => {

    const theme = useMantineTheme();

    const { isOpenModalRuta, solicitud, startCloseModalRuta,
            startDownloadRuta, startDownloadSolicitud } = useSolicitudStore();

    const { id } = solicitud;


    useEffect(() => {
        if(id !== undefined){
            if(!solicitud.servicio_id){
                setTimeout(() => {
                    startDownloadRuta({ id });
                }, 1500);
            }else {
                setTimeout(() => {
                    startDownloadSolicitud({ id });
                }, 1500);
            }
        }
    }, [solicitud]);


    const handleDownloadRuta = () => {
        if(!solicitud.servicio_id){
            startDownloadRuta({id});
        }else {
            startDownloadSolicitud({ id });
        }
    }


    return (
        <Modal
            opened={isOpenModalRuta}
            onClose={() => startCloseModalRuta()}
            title={<DivTitle title="Se ha generado su número de ruta:  " fw={700} />}
            closeOnClickOutside={false}
            closeOnEscape={false}
            withCloseButton={false}
            size="xl"
            overlayProps={{
                color:
                    theme.colorScheme === "dark"
                        ? theme.colors.dark[9]
                        : theme.colors.gray[2],
                opacity: 0.55,
                blur: 3,
            }}
        >
            <>
            <Image maw={200} mx="auto" radius="md" src={logoIcon} alt="icon-logo" />
                <TableRuta solicitud={solicitud} />
                <InfoModalRuta handleDownloadRuta={handleDownloadRuta} />
                <Group position="center">
                    <Button
                        mt={20}
                        leftIcon={<IconChecks />}
                        variant="light"
                        color="teal"
                        onClick={() => startCloseModalRuta()}
                    >
                        Entendido
                    </Button>
                </Group>
            </>
        </Modal>
    );
};
