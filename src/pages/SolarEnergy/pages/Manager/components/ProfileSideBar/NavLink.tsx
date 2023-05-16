import { Link as ChakraLink, Text, LinkProps as ChakraLinkProps, Icon } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../../../../../../hooks/useActiveLink";


interface NavLinkProps extends ChakraLinkProps {
    children: string;
    href: string;
    icon: ElementType;
}

export function NavLink({ children, href, icon, ...rest }: NavLinkProps) {
    return (
        <ActiveLink to={href} >
            <ChakraLink p='0.3rem' display='flex' w='13rem' transition='all 0.3s' _hover={{ bg: 'secondary.500', borderRadius: '5px' }} {...rest} alignItems='center' >
                <Icon as={icon} fontSize='1.3rem' />
                <Text fontWeight='medium' ml='0.5rem' >{children}</Text>
            </ChakraLink>
        </ActiveLink>
    )
}