import { Flex, Text } from "@chakra-ui/react";

export function MyPlanSection() {

    return (
        <Flex direction='column' w='100%' maxW={1180} mx='auto' mt='5rem' >
            <Text as='h1' fontWeight='bold' fontSize='2rem' >Minha Conta</Text>
            <Text as='h3' fontWeight='bold' fontSize='1rem' mt='2rem' >
                Para visualizar e gerenciar as informações do seu plano, clique no botão abaixo.
            </Text>

            <Text as='h3' fontWeight='bold' fontSize='1rem' mt='2rem' >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat veritatis, vero nesciunt magnam, quidem nisi dignissimos excepturi delectus velit repellat ut tenetur. Molestiae reprehenderit qui itaque, quasi quidem repellendus. Temporibus!
            </Text>


        </Flex>
    )
}