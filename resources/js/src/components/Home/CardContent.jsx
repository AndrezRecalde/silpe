import { createStyles, Card, Text, Group, ThemeIcon } from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    },

    title: {
        fontWeight: 700,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        lineHeight: 1.2,
    },

    body: {
        padding: theme.spacing.md,
    },
}));

export default function CardContent({ feature }) {
    const { classes } = useStyles();
    return (
        <Card withBorder radius="md" p={0} className={classes.card}>
            <Group noWrap spacing={0} pl={10}>
                <ThemeIcon
                    variant="gradient"
                    gradient={{ from: "teal", to: "lime", deg: 105 }}
                    radius="md"
                    size="xl"
                    color="teal"
                >
                    <feature.icon />
                </ThemeIcon>
                <div className={classes.body}>
                    <Link to={feature.link} style={{ textDecoration: "none" }}>
                        <Text
                            transform="uppercase"
                            color="dimmed"
                            weight={700}
                            size="xs"
                        >
                            {feature.title}
                        </Text>

                        <Text className={classes.title} color="black" mt="xs" mb="md">
                            {feature.description}
                        </Text>
                    </Link>
                </div>
            </Group>
        </Card>
    );
}
