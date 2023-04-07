import {
    Badge,
    Button,
    Card,
    Container,
    Grid,
    Group,
    Skeleton,
    Text,
} from "@mantine/core";
import React from "react";
import { useBusquedaStore } from "../../hooks/useBusquedaStore";

export const GridInfoTramite = () => {
    const { tramite } = useBusquedaStore();

    const { ingreso } = tramite;

    return (
        <Container mt={30}>
            <Grid align="center">
                <Grid.Col sm={12} md={4} lg={4}>
                    <Card
                        shadow="sm"
                        withBorder
                        radius="md"
                        padding="lg"
                        sx={(theme) => ({
                            backgroundColor:
                                theme.colorScheme === "dark"
                                    ? theme.colors.dark[7]
                                    : theme.white,
                        })}
                    >
                        <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                            Número de Ruta
                        </Text>
                        <Text fz="xs" fw={700}>
                            {ingreso.cnsctvo_rta}
                        </Text>
                        <Text
                            mt={15}
                            fz="xs"
                            tt="uppercase"
                            fw={700}
                            c="dimmed"
                        >
                            Estado de la Ruta
                        </Text>
                        <Text tt="uppercase" fz="xs" fw={700}>
                            <Badge color="red">
                                {ingreso.indctvo_estdo === "GEN"
                                    ? "Generado"
                                    : ingreso.indctvo_estdo === "FIN"
                                    ? "Finalizado"
                                    : ingreso.indctvo_estdo === "DES"
                                    ? "Despachado"
                                    : "Sec"}
                            </Badge>
                        </Text>

                        <Grid>
                            <Grid.Col span={6}>
                                <Text
                                    mt={15}
                                    fz="xs"
                                    tt="uppercase"
                                    fw={700}
                                    c="dimmed"
                                >
                                    Elaborado
                                </Text>
                                <Text fz="xs" fw={700}>
                                    {ingreso.fcha_elbrcion}
                                </Text>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Text
                                    mt={15}
                                    fz="xs"
                                    tt="uppercase"
                                    fw={700}
                                    c="dimmed"
                                >
                                    Recepcion
                                </Text>
                                <Text fz="xs" fw={700}>
                                    {ingreso.fcha_rcpcion}
                                </Text>
                            </Grid.Col>
                        </Grid>
                    </Card>
                </Grid.Col>

                <Grid.Col sm={12} md={8} lg={8}>
                    <Card shadow="sm" padding="lg" radius="md" withBorder>
                        <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                            Remitente
                        </Text>
                        <Text fz="xs" fw={700}>
                            {ingreso.doc_de}
                        </Text>
                        <Text
                            mt={15}
                            fz="xs"
                            tt="uppercase"
                            fw={700}
                            c="dimmed"
                        >
                            Para
                        </Text>
                        <Text fz="xs" fw={700}>
                            {ingreso.doc_para}
                        </Text>
                        <Text
                            mt={15}
                            fz="xs"
                            tt="uppercase"
                            fw={700}
                            c="dimmed"
                        >
                            Asunto
                        </Text>
                        <Text fz="xs" fw={700}>
                            {ingreso.asnto.length > 100 ? ingreso.asnto.slice(0, 100).toUpperCase() + '...' : ingreso.asnto.toUpperCase()}
                        </Text>
                    </Card>
                </Grid.Col>
            </Grid>
        </Container>
    );
};
