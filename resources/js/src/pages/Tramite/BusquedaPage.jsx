import {
    Badge,
    Box,
    Button,
    Card,
    Grid,
    Group,
    NumberInput,
    Text,
} from "@mantine/core";
import { isInRange, isNotEmpty, useForm } from "@mantine/form";
import { IconDatabase } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { BtnForward } from "../../components/Elements/BtnForward";
import { GridInfoTramite } from "../../components/Tramite/GridInfoTramite";
import { ResultadoTable } from "../../components/Tramite/ResultadoTable";
import { useBusquedaStore } from "../../hooks/useBusquedaStore";

const SITE_KEY = "6Lcy_D8iAAAAAHPkjm1QES0NWnBKY6VPPd1-fT18";

export const BusquedaPage = () => {

    const captcha = useRef(null);

    const { title, status, startSearchTramite, startClearSearch } =
        useBusquedaStore();

    const [valido, setValido] = useState(null);

    const form = useForm({
        initialValues: {
            year: "",
            cnsctvo_rta: "",
            recaptcha: null,
        },
        validate: {
            year:
                isNotEmpty("Por favor digite un año; Ejm: 2023") &&
                isInRange(
                    { min: 2012, max: 2023 },
                    "Los años deben ser desde 2012 hasta 2023"
                ),
            cnsctvo_rta: isNotEmpty(
                "Por favor digite los números de su documento"
            ),
        },
        transformValues: (values) => ({
            year: Number(values.year) || 0,
            cnsctvo_rta: Number(values.cnsctvo_rta) || 0,
        }),
    });

    const { year, cnsctvo_rta } = form.values;

    const date = new Date();

    const currentYear = date.getFullYear();

    useEffect(() => {
        document.title = title;
    }, []);

    useEffect(() => {
        return () => {
            startClearSearch();
        };
    }, [year, cnsctvo_rta]);



    const handleSearch = (e) => {
        e.preventDefault();
        if (captcha.current.getValue()) {
            setValido(true);
            if (currentYear === year) {
                startSearchTramite(cnsctvo_rta);
                console.log("aqui 0");
            } else {
                switch (cnsctvo_rta.toString().length) {
                    case 1:
                        startSearchTramite(`${year}00000${cnsctvo_rta}`);
                        form.reset();
                        break;
                    case 2:
                        startSearchTramite(`${year}0000${cnsctvo_rta}`);
                        form.reset();
                        break;
                    case 3:
                        startSearchTramite(`${year}000${cnsctvo_rta}`);
                        form.reset();
                        //captcha.current.reset();
                        break;
                    case 4:
                        startSearchTramite(`${year}00${cnsctvo_rta}`);
                        form.reset();
                        break;
                }
            }
        } else {
            setValido(false);
        }
    };


    return (
        <>
            <Box
                component="form"
                mx="auto"
                onSubmit={form.onSubmit((_, e) => handleSearch(e))}
            >
                <Group position="center">
                    <Card
                        withBorder
                        shadow="sm"
                        radius="md"
                        mt={30}
                        sx={{ position: "static", width: 800 }}
                    >
                        <Card.Section withBorder inheritPadding py="xs">
                            <Group position="apart">
                                <Text weight={700}>Consulta de Trámite</Text>
                                <BtnForward />
                            </Group>
                        </Card.Section>

                        <Card.Section inheritPadding mt="sm" pb="lg">
                            <Grid grow gutter="sm">
                                <Grid.Col sm={12} md={6} lg={6}>
                                    <NumberInput
                                        placeholder="Digite el año de su documento"
                                        label="Año de su documento"
                                        withAsterisk
                                        hideControls
                                        {...form.getInputProps("year")}
                                    />
                                </Grid.Col>

                                <Grid.Col sm={12} md={6} lg={6}>
                                    <NumberInput
                                        placeholder="Digite el número de trámite"
                                        label="Número de trámite"
                                        withAsterisk
                                        hideControls
                                        {...form.getInputProps("cnsctvo_rta")}
                                    />
                                </Grid.Col>
                            </Grid>
                        </Card.Section>
                        <Card.Section inheritPadding mt="sm" pb="md">
                            {valido === false ? (
                                <Group position="center">
                                    <Text fw={700} fz="xs" tt="uppercase">
                                        <Badge color="red">
                                            ¿Eres un Robot? 🤖, ¡Verifica el
                                            Captcha!
                                        </Badge>
                                    </Text>
                                </Group>
                            ) : null}
                            <Group position="center">
                                <ReCAPTCHA
                                    ref={captcha}
                                    sitekey={SITE_KEY}
                                    onChange={() =>
                                        form.setFieldValue("recaptcha", true)
                                    }
                                />
                            </Group>
                            <Group position="center">
                                <Button
                                    mt={10}
                                    leftIcon={<IconDatabase />}
                                    variant="light"
                                    color="teal"
                                    type="submit"
                                >
                                    Realizar Búsqueda
                                </Button>
                            </Group>
                        </Card.Section>
                    </Card>
                </Group>
            </Box>

            {status ? (
                <>
                    <GridInfoTramite />
                    <ResultadoTable />
                </>
            ) : null}
        </>
    );
};
