import { Select, Textarea } from "@mantine/core";
import { useDepartamentoStore } from "../../../hooks/useDepartamentoStore";
import { useGestionStore } from "../../../hooks/useGestionStore";
import { useServicioStore } from "../../../hooks/useServicioStore";
import { DivTitle } from "../../Elements/DivTitle";

export const ServicioStepper = ({ form }) => {

    const { agregadores } = useDepartamentoStore();
    const { servicios } = useServicioStore();

    return (
        <>
            <DivTitle title="Rellena la información seleccionando el servicio que deseas" />
            <Select
                label="Gestión"
                placeholder="Elige la Gestión"
                radius="md"
                mt="md"
                nothingFound="No options"
                withAsterisk
                {...form.getInputProps("departamento_id")}
                data={agregadores.map(agregador => {
                    return {
                        label: agregador.nmbre_dprtmnto,
                        value: agregador.cdgo_dprtmnto
                    }
                })}
            />
            <Select
                label="Servicio"
                placeholder="Elige el Servicio"
                radius="md"
                mt="md"
                nothingFound="No options"
                withAsterisk
                {...form.getInputProps("servicio_id")}
                data={servicios.map(servicio => {
                    return {
                        label: servicio.nombre_servicio,
                        value: servicio.id
                    }
                })}
            />
            <Textarea
                label="Asunto"
                placeholder="Por favor redacte el asunto de su requerimiento"
                mt="md"
                withAsterisk
                minRows={2}
                maxRows={5}
                {...form.getInputProps("asunto")}
            />
        </>
    );
};
