import { Box } from "@chakra-ui/react";
import { SidebarNav } from "./SidebarNav";


export function Sidebar() {
    return (
        <Box as="aside" w='14.5rem' mr='8'>
            <SidebarNav />
        </Box>
    )
}