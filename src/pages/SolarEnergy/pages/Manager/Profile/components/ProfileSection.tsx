import { Avatar, Box, Flex, Icon, Input, Text } from "@chakra-ui/react";
import { HiPencil } from 'react-icons/hi'
import man from '../../../../../../assets/man.png'
import { ProfileForm } from "./ProfileForm";

export function ProfileSection() {
    return (
        <Flex w='100%' maxW={1180} mx='auto' mt='5rem'>
            <Flex direction='column' align='center' >
                <Text as='h1' fontWeight='bold' fontSize='2rem' >Minha Conta</Text>

                <Box mt='2rem' mb='1.3rem' borderRadius='full' border='1px' borderColor='secondary.200' p='7px'>
                    <Avatar
                        size='2xl'
                        src={man}
                    />
                </Box>

                <Flex
                    as='label'
                    htmlFor="avatar"
                    w='100%'
                    p='10px'
                    borderRadius={5}
                    border='1px'
                    borderColor='secondary.200'
                    justify='flex-end'
                    transition='0.3s'
                    cursor='pointer'
                    _hover={{ bg: 'secondary.500' }}
                >

                    <Input
                        type="file"
                        id="avatar"
                        name="avatar"
                        accept="image/png, image/jpeg"
                        hidden
                    />

                    <Flex w='70%' justify='space-between' textAlign='center'>
                        <Text fontWeight='bold' fontSize='0.9rem' >Editar foto</Text>
                        <Icon as={HiPencil} color='#5388A4' fontSize='1.3rem' />
                    </Flex>

                </Flex>
            </Flex>

            <ProfileForm />

        </Flex>
    )
}

