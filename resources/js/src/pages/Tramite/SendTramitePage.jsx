import { Card, Container, Grid, Group, Text } from "@mantine/core";
import { BtnForward } from "../../components/Elements/BtnForward";
import { ModalRuta } from "../../components/Elements/ModalRuta";
import { SendStepper } from "../../components/Stepper/SendStepper";

export const SendTramitePage = () => {
    return (
        <Container>
            <Grid justify="center">
                <Card
                    withBorder
                    shadow="sm"
                    radius="md"
                    mt="lg"
                    mb="lg"
                    sx={{ position: "static", width: 900 }}
                >
                    <Card.Section withBorder inheritPadding py="lg">
                        <Group position="apart">
                            <Text size="lg" weight={700}>
                                Solicitud de Servicios
                            </Text>
                            <BtnForward />
                        </Group>
                    </Card.Section>
                    <Card.Section withBorder inheritPadding py="lg">
                        <SendStepper />
                    </Card.Section>
                </Card>
            </Grid>
            <ModalRuta />
        </Container>
    );
};
