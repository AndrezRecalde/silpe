import { Box, Button, Card, Container, Grid, Group, Text } from "@mantine/core";
import { hasLength, isNotEmpty, useForm } from "@mantine/form";
import { IconBrandTelegram } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { BtnForward } from "../../components/Elements/BtnForward";
import { ModalRuta } from "../../components/Elements/ModalRuta";
import { FormPasantia } from "../../components/Pasantia/FormPasantia";
import { Questions } from "../../components/Pasantia/Questions";
import { useSolicitudStore } from "../../hooks/useSolicitudStore";

export const PasantiaPage = () => {

    const [title, setTitle] = useState("SILPE | Pasantias");

    const { loading, startCreatePasantia } = useSolicitudStore();

    const form = useForm({
        initialValues: {
            institucion_id: "",
            asunto: "",
            departamento_id: "",
            archivo_doc: null,
        },
        validate: {
            institucion_id: isNotEmpty("Por favor elija una institución"),
            asunto: hasLength( { min: 10 }, "Por favor el asunto debe ser más especifico"),
            departamento_id: isNotEmpty('Por favor elige el departamento para la pasantía'),
            archivo_doc: isNotEmpty("Por favor cargue el documento de solicitud"),
        },
    });

    useEffect(() => {
      document.title = title;

      return () => {
        setTitle("");
      }
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        startCreatePasantia(form.values);
        form.reset();
    }

    return (
        <Container size="xs">
            <Box
                component="form"
                mx="auto"
                onSubmit={form.onSubmit((_, e) => handleSubmit(e))}
            >
                <Card
                    withBorder
                    shadow="sm"
                    p="lg"
                    radius="md"
                    mt={40}
                    sx={{ position: "static" }}
                >
                    <Card.Section withBorder inheritPadding py="md">
                        <Group position="apart">
                            <Text weight={700}>Registro de Pasantías</Text>
                            <BtnForward />
                        </Group>
                    </Card.Section>
                    <Card.Section inheritPadding mt="sm" pb="lg">
                        <FormPasantia form={form} />
                    </Card.Section>
                    <Card.Section inheritPadding mt="sm" pb="md">
                        <Group position="center">
                            <Button
                                mt={10}
                                leftIcon={<IconBrandTelegram />}
                                variant="light"
                                color="teal"
                                type="submit"
                                loading={false}
                            >
                                Enviar Requerimiento
                            </Button>
                        </Group>
                    </Card.Section>
                    <Card.Section inheritPadding mt="sm" pb="md">
                        <Questions />
                    </Card.Section>
                </Card>
            </Box>
            <ModalRuta />

        </Container>
    );
};
