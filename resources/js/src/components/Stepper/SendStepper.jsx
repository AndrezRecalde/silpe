import { Badge, Button, Group, Stepper } from "@mantine/core";
import { hasLength, isNotEmpty, useForm } from "@mantine/form";
import { IconChevronsLeft, IconChevronsRight, IconInfoCircle, IconSend } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useDepartamentoStore } from "../../hooks/useDepartamentoStore";
import { useInstitucionStore } from "../../hooks/useInstitucionStore";
import { useServicioStore } from "../../hooks/useServicioStore";
import { useSolicitudStore } from "../../hooks/useSolicitudStore";
import { useStateStore } from "../../hooks/useStateStore";
import { ArchivoStepper } from "./archivo/ArchivoStepper";
import { InfoStepper } from "./informacion/InfoStepper";
import { ServicioStepper } from "./servicio/ServicioStepper";
import { UbicacionStepper } from "./ubicacion/UbicacionStepper";

export const SendStepper = () => {

    const [active, setActive] = useState(0);

    const { startLoadCantones, startLoadParroquias } = useStateStore();

    const { startLoadAgregadores } = useDepartamentoStore();

    const { startLoadServicios } = useServicioStore();

    const { startLoadComunidades } = useInstitucionStore();

    const { startCreateSolicitud } = useSolicitudStore();


    const form = useForm({
        initialValues: {
            nombres: "",
            apellidos: "",
            cedula: "",
            canton_id: "",
            parroquia_id: "",
            recinto_id: "",
            comunidad_id: "",
            departamento_id: "",
            servicio_id: "",
            asunto: "",
            archivo_doc: "",
            archivo_firmas: "",
        },
        validate: {
            nombres: isNotEmpty("Por favor ingrese sus nombres"),
            apellidos: isNotEmpty("Por favor ingrese sus apellidos"),
            cedula: hasLength({ min: 10 },"Por favor la cédula debe contener 10 digitos"),
            canton_id: isNotEmpty("Por favor ingrese su cantón"),
            parroquia_id: isNotEmpty("Por favor ingrese su parroquia"),
            /* recinto_id: isNotEmpty("Por favor ingrese su recinto"), */
            comunidad_id: isNotEmpty("Por favor ingrese la comunidad a la que pertenece"),
            departamento_id: isNotEmpty("Por favor ingrese una gestión productora"),
            servicio_id: isNotEmpty("Por favor ingrese un servicio"),
            asunto: hasLength({ min: 10 },"Por favor el asunto debe ser más especifico"),
            archivo_doc: isNotEmpty("Por favor ingrese el documento PDF"),
            archivo_firmas: isNotEmpty("Por favor ingrese el archivo de firmas"),
        },
    });

    const prevStep = () =>
        setActive((current) => (current > 0 ? current - 1 : current));

    const nextStep = () => {
        const { errors } = form.validate();

        switch (active) {
            case 0:
                if (
                    errors.hasOwnProperty("nombres") ||
                    errors.hasOwnProperty("apellidos") ||
                    errors.hasOwnProperty("cedula")
                ) {
                    setActive((current) => current * 1);
                } else {
                    setActive((current) =>
                        current < 4 ? current + 1 : current
                    );
                    form.clearErrors();
                }
                break;

            case 1:
                if (
                    errors.hasOwnProperty("canton_id") ||
                    errors.hasOwnProperty("parroquia_id") ||
                    errors.hasOwnProperty("comunidad_id")
                ) {
                    setActive((current) => current * 1);
                } else {
                    setActive((current) =>
                        current < 4 ? current + 1 : current
                    );
                    form.clearErrors();
                }
                break;

            case 2:
                if (
                    errors.hasOwnProperty("departamento_id") ||
                    errors.hasOwnProperty("servicio_id") ||
                    errors.hasOwnProperty("asunto")
                ) {
                    setActive((current) => current * 1);
                } else {
                    setActive((current) =>
                        current < 4 ? current + 1 : current
                    );
                    form.clearErrors();
                }
                break;

            case 3:
                if (
                    errors.hasOwnProperty("archivo_doc") ||
                    errors.hasOwnProperty("archivo_firmas")
                ) {
                    setActive((current) => current * 1);
                } else {
                    setActive((current) =>
                        current < 4 ? current + 1 : current
                    );
                    console.log(active);
                    form.clearErrors();
                }
                break;
            default:
                break;
        }
    };

    const { canton_id, departamento_id } = form.values;

    useEffect(() => {
      startLoadCantones();
      startLoadAgregadores();
      startLoadComunidades();
    }, []);

    useEffect(() => {
        form.setFieldValue("parroquia_id", "");
      startLoadParroquias(canton_id);
    }, [canton_id]);

    useEffect(() => {
        form.setFieldValue("servicio_id", "");
        startLoadServicios(departamento_id);
    }, [departamento_id]);

    const handleSend = () => {
        setActive((current) => current * 0);
        startCreateSolicitud(form.values);
        form.reset();
    }


    return (
        <>
            <Stepper
                active={active}
                onStepClick={setActive}
                breakpoint="sm"
                color="green"
                p={10}
            >
                <Stepper.Step
                    label="Primer Paso"
                    description="Tu Información"
                    color="green"
                    allowStepSelect={active > 0}
                    allowStepClick={false}
                >
                    <InfoStepper form={form} />
                </Stepper.Step>

                <Stepper.Step
                    label="Segundo Paso"
                    description="Ingresa la Ubicación"
                    color="green"
                    allowStepSelect={active > 1}
                    allowStepClick={false}
                >
                    <UbicacionStepper form={form} />
                </Stepper.Step>

                <Stepper.Step
                    label="Tercer Paso"
                    description="Solicita el Servicio"
                    color="green"
                    allowStepSelect={active > 2}
                >
                    <ServicioStepper form={form} />
                </Stepper.Step>

                <Stepper.Step
                    label="Paso Final"
                    description="Subida de Archivos"
                    color="green"
                    allowStepSelect={active > 3}
                >
                    <ArchivoStepper form={form} />
                </Stepper.Step>

                <Stepper.Completed>
                    <Group position="center" mt="md">
                        Gracias por Completar el Formulario con la información
                        correspondiente, Por favor
                        <Badge
                            size="lg"
                            radius="xl"
                            color="teal"
                            leftSection={<IconInfoCircle size={18} />}
                        >
                            Presiona el botón "enviar formulario"
                        </Badge>{" "}
                        para finalizar con éxito.
                    </Group>
                </Stepper.Completed>
            </Stepper>

            {active === 4 ? (
                <Group position="center" mt="xl">
                    <Button
                        variant="gradient"
                        gradient={{ from: "teal", to: "lime", deg: 105 }}
                        color="green"
                        radius="md"
                        leftIcon={<IconSend />}
                        onClick={handleSend}
                    >
                        Enviar Formulario
                    </Button>
                </Group>
            ) : (
                <Group position="center" mt="xl">
                    <Button variant="default" color="green" onClick={prevStep} leftIcon={<IconChevronsLeft size="1rem" />}>
                        Regresar
                    </Button>
                    <Button color="green" onClick={nextStep} rightIcon={<IconChevronsRight size="1rem" />}>
                        Siguiente
                    </Button>
                </Group>
            )}
        </>
    );
};
