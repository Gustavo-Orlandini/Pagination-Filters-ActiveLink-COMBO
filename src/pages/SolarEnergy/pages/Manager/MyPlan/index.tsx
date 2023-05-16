import { Flex } from "@chakra-ui/react";
import { HeaderBar } from "../../Home/HeaderBar/HeaderBar";
import { SidebarNav } from "../components/ProfileSideBar/SidebarNav";
import { MyPlanSection } from "./components/MyPlanSection";


export function MyPlan() {

    return (
        <Flex direction='column' h='100%' w='100%' >
            <HeaderBar children={undefined} />
            <Flex w='100%' px='1.5rem' mx='auto' flex={1}>
                <SidebarNav />
                <MyPlanSection />
            </Flex>
        </Flex>
    );
}