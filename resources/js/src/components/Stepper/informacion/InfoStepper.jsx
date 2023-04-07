import { Grid, TextInput } from "@mantine/core";
import { IconAt, IconInfoCircle } from "@tabler/icons-react";
import { DivTitle } from "../../Elements/DivTitle";

export const InfoStepper = ({ form }) => {
    return (
        <>
            <DivTitle title="Rellena la información por favor" />
            <Grid>
                <Grid.Col xs={12} md={6} lg={6}>
                    <TextInput
                        placeholder="Ingrese sus Nombres"
                        label="Nombres"
                        radius="md"
                        withAsterisk
                        mt={10}
                        icon={<IconInfoCircle size={18} />}
                        {...form.getInputProps("nombres")}
                    />
                </Grid.Col>
                <Grid.Col xs={12} md={6} lg={6}>
                    <TextInput
                        placeholder="Ingrese sus Apellidos"
                        label="Apellidos"
                        radius="md"
                        withAsterisk
                        mt={10}
                        icon={<IconInfoCircle size={18} />}
                        {...form.getInputProps("apellidos")}
                    />
                </Grid.Col>
                <Grid.Col xs={12} md={12} lg={12}>
                    <TextInput
                        placeholder="Ingrese su Cedula"
                        label="Cedula"
                        radius="md"
                        withAsterisk
                        mt={10}
                        icon={<IconInfoCircle size={18} />}
                        {...form.getInputProps("cedula")}
                    />
                </Grid.Col>
            </Grid>
        </>
    );
};
