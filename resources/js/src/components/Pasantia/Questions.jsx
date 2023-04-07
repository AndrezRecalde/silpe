import { Accordion, Badge, createStyles, rem, Title } from "@mantine/core";
import { IconFile } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
    wrapper: {
        paddingTop: `calc(${theme.spacing.xl} * 2)`,
        paddingBottom: `calc(${theme.spacing.xl} * 2)`,
        minHeight: 650,
    },

    title: {
        marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    },

    item: {
        borderRadius: theme.radius.md,
        marginBottom: theme.spacing.lg,
        border: `${rem(1)} solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[4]
                : theme.colors.gray[3]
        }`,
    },
}));

const placeholder = {
    file_load: `Se debe cargar un archivo en formato PDF donde se redacte la
                    solicitud de las prácticas Pre-Profesionales detallando la información
                    del o los estudiantes. Si deseas puedes descargar nuestro documento de
                    referencia:`,
};

export const Questions = () => {
    const { classes } = useStyles();
    return (
        <>
            <Title order={4} align="center" className={classes.title}>
                Preguntas Frecuentes
            </Title>
            <Accordion variant="separated">
                <Accordion.Item className={classes.item} value="file_load">
                    <Accordion.Control>
                        ¿Que archivo debo cargar al sitio web?
                    </Accordion.Control>
                    <Accordion.Panel>
                        {placeholder.file_load}{" "}
                        <a style={{ textDecoration: "none" }} target="_blank" href="https://prefecturadeesmeraldas.gob.ec/">AQUÍ</a>
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </>
    );
};
