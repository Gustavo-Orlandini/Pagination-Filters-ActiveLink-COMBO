import { Stack } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";
import { CgProfile } from 'react-icons/cg'
import { AiOutlineAudit, AiOutlineSave } from 'react-icons/ai'
import { MdOutlineListAlt } from "react-icons/md";


export function SidebarNav() {
    return (
        <Stack spacing='12' align='flex-start' boxShadow='4px 0px 4px rgba(0, 0, 0, 0.1)' px='1rem' >

            <NavSection title="MINHA CONTA" >
                <NavLink icon={CgProfile} href='/profile' >Dados Pessoais</NavLink>
                <NavLink icon={AiOutlineAudit} href='/myplan' >Plano Contratado</NavLink>
            </NavSection>

            <NavSection title="PEDIDOS">
                <NavLink icon={MdOutlineListAlt} href='/prospection' >Lista de Pedidos</NavLink>
            </NavSection>

            <NavSection title="FALE CONOSCO" >
                <NavLink icon={AiOutlineSave} href='/saved' >Fale Conosco</NavLink>
            </NavSection>

        </Stack>
    )
}