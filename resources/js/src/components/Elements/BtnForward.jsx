import { ActionIcon } from "@mantine/core";
import { IconChevronsLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export const BtnForward = () => {

    const navigate = useNavigate();

    const handleForward = () => {
        navigate("/");
    }
    return (
        <ActionIcon
            variant="subtle"
            color="dark"
            radius="lg"
            onClick={handleForward}
            size="1.5rem"
        >
            <IconChevronsLeft />
        </ActionIcon>
    );
};
