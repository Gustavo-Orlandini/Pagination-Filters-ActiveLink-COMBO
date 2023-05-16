import { Flex } from "@chakra-ui/react";
import { HeaderBar } from "../../Home/HeaderBar/HeaderBar";
import { SidebarNav } from "../components/ProfileSideBar/SidebarNav";
import { AnyWaySection } from "../Prospection/components/AnyWaySection";

export function SavedModelsPage() {

    return (
        <Flex h="100%" w="100%" flexDir="column">
            <HeaderBar children={undefined} />
            <Flex w='100%' mx='auto' pl='1.5rem' overflow="auto" flex={1}>
                <SidebarNav />
                <AnyWaySection />
            </Flex>
        </Flex>
    );
}