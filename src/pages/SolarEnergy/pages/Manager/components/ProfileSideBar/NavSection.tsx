import { Box, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface NavSectionProps {
    title: string;
    children: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
    return (
        <Box mt='4rem' >

            <Text fontWeight='extrabold' color='secondary.600' fontSize='0.9rem' >{title}</Text>

            <Stack spacing='0.8rem' mt='0.8rem' ml='1rem' alignItems='start' fontSize='0.9rem'  >

                {children}

            </Stack>

        </Box>
    )
}