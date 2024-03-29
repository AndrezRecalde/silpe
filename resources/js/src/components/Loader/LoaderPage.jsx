import { Flex, Loader } from "@mantine/core";
import React from "react";

export const LoaderPage = () => {
    return (
        <Flex
            mih={50}
            bg="rgba(0, 0, 0, 0)"
            gap="md"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
        >
            <Loader color="dark" size="xl" />
        </Flex>
    );
};
