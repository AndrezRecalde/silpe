import {
    Box,
    Center,
    FileInput,
    Flex,
    Group,
    rem,
    Select,
    Textarea,
} from "@mantine/core";
import { IconFile } from "@tabler/icons-react";
import { useEffect } from "react";
import { useDepartamentoStore } from "../../hooks/useDepartamentoStore";
import { useInstitucionStore } from "../../hooks/useInstitucionStore";

export const FormPasantia = ({ form }) => {

    const { instituciones, startLoadInstituciones } = useInstitucionStore();
    const { departamentos, startLoadDepartamentos } = useDepartamentoStore();

    const Value = ({ file }) => {
        return (
            <Center
                inline
                sx={(theme) => ({
                    backgroundColor:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[7]
                            : theme.colors.gray[1],
                    fontSize: theme.fontSizes.xs,
                    padding: `${rem(3)} ${rem(7)}`,
                    borderRadius: theme.radius.sm,
                })}
            >
                <IconFile size={rem(14)} style={{ marginRight: rem(5) }} />
                <span
                    style={{
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        maxWidth: rem(200),
                        display: "inline-block",
                    }}
                >
                    {file.name}
                </span>
            </Center>
        );
    };

    const ValueComponent = ({ value }) => {
        if (Array.isArray(value)) {
            return (
                <Group spacing="sm" py="xs">
                    {value.map((file, index) => (
                        <Value file={file} key={index} />
                    ))}
                </Group>
            );
        }

        return <Value file={value} />;
    };

    useEffect(() => {
        startLoadInstituciones();
        startLoadDepartamentos();
    }, []);


    return (
        <>
            <Select
                label="Institución"
                placeholder="Elige tu institución educativa"
                radius="md"
                searchable
                mt="md"
                nothingFound="No options"
                withAsterisk
                {...form.getInputProps("institucion_id")}
                data={instituciones.map((institucion) => {
                    return {
                        label: institucion.nmbre_clnte,
                        value: institucion.cdgo_clnte,
                    };
                })}
            />
            <Select
                label="Departamento"
                placeholder="Departamento de pasantía"
                radius="md"
                searchable
                mt="md"
                nothingFound="No options"
                withAsterisk
                {...form.getInputProps("departamento_id")}
                data={departamentos.map(departamento => {
                    return {
                        label: departamento.nmbre_dprtmnto,
                        value: departamento.cdgo_dprtmnto
                    }
                })}
            />
            <Textarea
                label="Asunto"
                placeholder="Ejem: Solicitud de autorización
                    para realizar pasantías los alumnos [Nombre de alumno(s)] de la carrera [Nombre carrera]."
                mt="md"
                withAsterisk
                minRows={2}
                maxRows={5}
                {...form.getInputProps("asunto")}
            />
            <FileInput
                placeholder="Seleccionar Archivo"
                label="Archivo Documento"
                clearable
                radius="md"
                withAsterisk
                mt="md"
                accept="application/pdf"
                valueComponent={ValueComponent}
                {...form.getInputProps("archivo_doc")}
            />
        </>
    );
};
