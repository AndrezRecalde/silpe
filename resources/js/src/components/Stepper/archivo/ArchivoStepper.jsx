import { FileInput } from "@mantine/core";
import { DivTitle } from "../../Elements/DivTitle";

export const ArchivoStepper = ({ form }) => {
    return (
        <>
            <DivTitle title="Carga la información: Documento, Firmas e Imágenes" />
            <FileInput
                placeholder="Seleccionar Archivo"
                label="Archivo Documento"
                radius="md"
                withAsterisk
                mt="md"
                {...form.getInputProps("archivo_doc")}
            />
            <FileInput
                placeholder="Seleccionar Archivo"
                label="Archivo de Firmas"
                radius="md"
                withAsterisk
                mt="md"
                {...form.getInputProps("archivo_firmas")}
            />
        </>
    );
};
