import {
    createStyles,
    Title,
    SimpleGrid,
    Text,
    Grid,
    Col,
    rem,
    Paper,
    Container,
} from "@mantine/core";

import CardContent from "./CardContent";

import { IconBrandTelegram, IconSchool, IconSearch } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
    wrapper: {
        padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: rem(36),
        fontWeight: 900,
        lineHeight: 1.1,
        marginBottom: theme.spacing.md,
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
}));

const features = [
    {
        icon: IconSearch,
        title: "Búsqueda de Trámite",
        description: "Realiza la búsqueda y seguimiento de tu trámite",
        link: "/tramite/busqueda"
    },
    {
        icon: IconBrandTelegram,
        title: "Envío de Requerimiento",
        description: "Realiza envíos de requerimientos de servicios",
        link: "/tramite/solicitud"
    },
    {
        icon: IconSchool,
        title: "Pasantías Estudiantes",
        description: "Realiza el registro de las pasantías estudiantiles",
        link: "/tramite/pasantias"
    },
];

export const Banner = () => {
    const { classes } = useStyles();

    const items = features.map((feature) => (
        <div key={feature.title}>
            <CardContent feature={feature} />
        </div>
    ));

    return (
        <Container mt={20} mb={10}>
            <Paper shadow="md" radius="md" p="md" mb={15}>
                <div className={classes.wrapper}>
                    <Grid gutter={80}>
                            <Col span={12} md={12}>
                                <Title className={classes.title} order={2}>
                                    Nuestros servicios <br />
                                    <Text
                                        component="span"
                                        color="green"
                                        inherit
                                    >
                                        En Línea
                                    </Text>{" "}
                                    para la Comunidad
                                </Title>
                                <Text c="dimmed">
                                    Build fully functional accessible web
                                    applications faster than ever – Mantine
                                    includes more than 120 customizable
                                    components and hooks to cover you in any
                                    situation
                                </Text>
                            </Col>

                        <Col span={12} md={12}>
                            <SimpleGrid
                                cols={2}
                                spacing={30}
                                breakpoints={[{ maxWidth: "md", cols: 1 }]}
                            >
                                {items}
                            </SimpleGrid>
                        </Col>
                    </Grid>
                </div>
            </Paper>
        </Container>
    );
};
