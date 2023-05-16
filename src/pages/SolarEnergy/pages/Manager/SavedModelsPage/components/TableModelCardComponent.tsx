import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Flex, HStack, Icon, IconButton, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { FiDownload, FiFileText, FiTrash } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { Item } from "../../../../../../common/types";
import { FormatDate } from "../../../../../../utils/FormatDate";
import { FormatPercentage } from "../../../../../../utils/FormatPercentage";

interface TableModelCardComponentProps {
    item: Item;
}

export function TableModelCardComponent({ item }: TableModelCardComponentProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <HStack
            py={2}
            px={4}
            spacing={2}
            borderRadius={5}
            fontSize='0.8rem'
            border="1px solid #D9D9D9"
            boxShadow="2px 2px 4px rgba(0, 0, 0, 0.25);"
            _hover={{ bgColor: "#5388A4", color: "white" }}
        >
            <Flex w='33.5%'>
                <Text maxW='84%' >
                    {item.nome}
                </Text>
            </Flex>

            <Center w='16.6%'>
                <Text maxW='80%' >
                    {item.local}
                </Text>
            </Center>

            <Center w='12.4%'>
                <Text maxW='80%'>
                    {FormatPercentage(item.tirShed)}
                </Text>
            </Center>

            <Center w='12%'>
                <Text maxW='80%'>
                    {FormatPercentage(item.tirTracker)}
                </Text>
            </Center>

            <Center w='12%'>
                <Text maxW='80%'>
                    {FormatDate(item.data)}
                </Text>
            </Center>

            <Center w='10%'>

                <Menu>
                    <MenuButton
                        ml='12%'
                        _hover={{ color: 'gray.900', bgColor: 'gray.700', borderRadius: '5px' }}
                    >
                        <IconButton
                            variant='outline'
                            colorScheme='gray'
                            aria-label="Opções de ações"
                            _hover={{ color: 'red' }}
                            icon={<HamburgerIcon fontSize='1.3rem' />}
                        />
                    </MenuButton>
                    <MenuList
                        color='gray.900'
                        bg="white"
                        boxShadow=" rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;"
                        borderColor="secondary.500"
                        mr="2rem"
                    >

                        <MenuItem
                            fontWeight='medium'
                            _hover={{
                                backgroundColor: "secondary.500",
                                borderRadius: 2
                            }}
                        >
                            <HStack>
                                <Icon as={FiFileText} />
                                <NavLink to='/solarEnergy/profile' >Cálculo de modelagem</NavLink>
                            </HStack>

                        </MenuItem>

                        <MenuItem
                            fontWeight='medium'
                            _hover={{
                                backgroundColor: "secondary.500",
                                borderRadius: 2
                            }}
                        >
                            <HStack>
                                <Icon as={FiDownload} />
                                <NavLink to='/solarEnergy/myplan' >Download</NavLink>
                            </HStack>
                        </MenuItem>

                        <MenuItem
                            fontWeight='medium'

                            onClick={onOpen}
                            _hover={{
                                backgroundColor: "secondary.500",
                                borderRadius: 2,
                                color: 'red.500'
                            }}
                        >
                            <HStack>
                                <Icon as={FiTrash} />
                                <NavLink to='/solarEnergy/prospection' >Deletar</NavLink>
                            </HStack>
                        </MenuItem>
                    </MenuList>
                </Menu >
            </Center>



            <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent top='30%'>
                    <ModalHeader>Deseja excluir essa modelagem da sua lista?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>Essa ação não poderá ser desfeita.</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            w='7rem'
                            bg='white'
                            border='1px'
                            fontWeight='medium'
                            borderColor='gray.900'
                            borderRadius={5}
                            _hover={{ bg: 'secondary.200' }}
                            onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button
                            w="7rem"
                            ml='0.5rem'
                            border="1px"
                            type="submit"
                            color="white"
                            bg="third.600"
                            fontWeight="medium"
                            borderColor="secondary.200"
                            borderRadius={5}
                            _hover={{ bg: "red.500" }}
                        >
                            Excluir
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </HStack>
    )
}