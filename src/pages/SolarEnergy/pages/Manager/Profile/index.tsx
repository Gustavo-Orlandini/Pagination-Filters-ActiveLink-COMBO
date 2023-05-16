import { Flex } from "@chakra-ui/react";
import { HeaderBar } from "../../Home/HeaderBar/HeaderBar";
import { SidebarNav } from "../components/ProfileSideBar/SidebarNav";
import { ProfileSection } from "./components/ProfileSection";

export function Profile() {
    return (
        <Flex direction='column' h='100vh' >
            <HeaderBar children={undefined}
            />

            <Flex w='100%' px='1.5rem' mx='auto' flex={1}>
                <SidebarNav />
                <ProfileSection />
            </Flex>
        </Flex>
    )
}