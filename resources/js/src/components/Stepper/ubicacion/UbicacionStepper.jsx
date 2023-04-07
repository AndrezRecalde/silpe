import { Grid, Select, TextInput } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import { useInstitucionStore } from "../../../hooks/useInstitucionStore";
import { useStateStore } from "../../../hooks/useStateStore";
import { DivTitle } from "../../Elements/DivTitle";

export const UbicacionStepper = ({ form }) => {

    const { cantones, parroquias } = useStateStore();

    const { instituciones } = useInstitucionStore();

    return (
        <>
            <DivTitle title="Rellena la información por favor: Cantón, Parroquia y Comunidad" />
            <Grid>
                <Grid.Col xs={12} md={6} lg={6} xl={6}>
                    <Select
                        label="Cantón"
                        placeholder="Tu Cantón"
                        radius="md"
                        searchable
                        mt="md"
                        nothingFound="No options"
                        withAsterisk
                        {...form.getInputProps("canton_id")}
                        data={cantones.map(canton => {
                            return {
                                label: canton.nombre_canton,
                                value: canton.id
                            }
                        })}
                    />
                </Grid.Col>
                <Grid.Col xs={12} md={6} lg={6} xl={6}>
                    <Select
                        label="Parroquia"
                        placeholder="Tu Parroquia"
                        radius="md"
                        mt="md"
                        searchable
                        nothingFound="No options"
                        withAsterisk
                        {...form.getInputProps("parroquia_id")}
                        data={parroquias.map(parroquia => {
                            return {
                                label: parroquia.nombre_parroquia,
                                value: parroquia.id
                            }
                        })}
                    />
                </Grid.Col>
            </Grid>
            {/* <Select
                label="Recinto"
                placeholder="Tu Recinto"
                size="md"
                radius="md"
                mt="md"
                searchable
                nothingFound="No options"
                withAsterisk
                {...form.getInputProps("recinto_id")}
                data={[]}
            /> */}
                <Select
                    label="Comunidad"
                    placeholder="Selecciona una comunidad"
                    description="Se ingresa la comunidad o la institución a la que usted pertenece"
                    radius="md"
                    mt="md"
                    searchable
                    nothingFound="No options"
                    withAsterisk
                    {...form.getInputProps("comunidad_id")}
                    data={instituciones.map(institucion => {
                        return {
                            label: institucion.nmbre_clnte,
                            value: institucion.cdgo_clnte
                        }
                    })}
                    />
        </>
    );
};


