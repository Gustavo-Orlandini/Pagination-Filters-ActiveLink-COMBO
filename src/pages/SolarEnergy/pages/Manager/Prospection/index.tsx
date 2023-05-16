import { Flex } from "@chakra-ui/react";
import { HeaderBar } from "../../Home/HeaderBar/HeaderBar";
import { SidebarNav } from "../components/ProfileSideBar/SidebarNav";
import { SearchCalculateSection } from "../SavedModelsPage/components/SearchCalculateSection";

export function Prospection() {

  return (
    <Flex h="100%" w="100%" flexDir="column">
      <HeaderBar children={undefined} />
      <Flex w='100%' mx='auto' pl='1.5rem' overflow="auto" flex={1}>
        <SidebarNav />
        <SearchCalculateSection />
      </Flex>
    </Flex>
  );
}
