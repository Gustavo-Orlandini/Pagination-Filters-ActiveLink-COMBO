import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Image, HStack, Menu, MenuButton, MenuList, MenuItem, MenuDivider, Icon, Text, Avatar } from "@chakra-ui/react";
import brand from "../../../../../assets/logo/brand.png"
import man from "../../../../../assets/man.png"
import { ReactNode } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiOutlineAudit } from "react-icons/ai";
import { MdLogout, MdOutlineListAlt } from "react-icons/md";


interface HeaderBarProps {
    children: ReactNode,
}

export function HeaderBar({ children }: HeaderBarProps) {
    const navigate = useNavigate()

    return (
        <HStack as="header" backgroundColor='primary.500' justifyContent="space-between" py={2} w="100%" zIndex={2} boxShadow="md" p='1rem'>
            <HStack spacing="2rem" ml="1rem" w="100%" >
                <Image
                    boxSize='3rem'
                    src={brand}
                    _hover={{ cursor: "pointer" }}
                    onClick={() => {
                        navigate('/');
                    }}
                />
                {children}
            </HStack>

            <Avatar
                size='md'
                src={man}
            />

            <Text fontSize="sm"
                color='secondary.100'
            >
                Nome do usuário
            </Text>
            <Menu>
                <MenuButton
                    transition="all 0.3s">
                    <Box display='flex' ml="1rem" mr="2rem">
                        <HamburgerIcon color='secondary.100' w={10} h={8} />
                    </Box>
                </MenuButton>
                <MenuList
                    bg="white"
                    boxShadow="base"
                    borderColor="secondary.500"
                    mr="2rem"
                >
                    <Text p="1rem" color="secondary.600">MINHA CONTA</Text>

                    <MenuItem _hover={{
                        backgroundColor: "secondary.500",
                        borderRadius: 2
                    }}
                    >
                        <HStack>
                            <Icon as={CgProfile} />
                            <NavLink to='/profile' >Dados Pessoais</NavLink>
                        </HStack>

                    </MenuItem>
                    <MenuItem _hover={{
                        backgroundColor: "secondary.500",
                        borderRadius: 2
                    }}
                    >
                        <HStack>
                            <Icon as={AiOutlineAudit} />
                            <NavLink to='/myplan' >Plano Contratado</NavLink>
                        </HStack>
                    </MenuItem>
                    <MenuDivider color="black" />
                    <Text p="1rem" color="secondary.600">PROSPECÇÕES</Text>
                    <MenuItem _hover={{
                        backgroundColor: "secondary.500",
                        borderRadius: 2
                    }}
                    >
                        <HStack>
                            <Icon as={MdOutlineListAlt} />
                            <NavLink to='/prospection' >Lista de Propriedades</NavLink>
                        </HStack>
                    </MenuItem>
                    <MenuDivider color="black" />
                    <MenuItem
                        icon={<MdLogout />}
                        _hover={{
                            backgroundColor: "secondary.500",
                            borderRadius: 2
                        }}>
                        Sair
                    </MenuItem>
                </MenuList>
            </Menu >

        </HStack >
    );
}