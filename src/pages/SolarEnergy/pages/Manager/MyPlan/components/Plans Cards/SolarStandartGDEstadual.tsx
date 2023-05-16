import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Heading, List, ListIcon, ListItem, Stack, Text } from "@chakra-ui/react";
import { FcCheckmark } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

export function SolarStandartGDEstadual() {
    const navigate = useNavigate()

    return (
        <Card
            maxW='md'
            h='37rem'
            border='1px'
            transition='0.4s'
            borderColor='gray.300'
            boxShadow='4px 4px 4px rgba(0, 0, 0, 0.1)'
            borderRadius={5}
            _hover={{
                boxShadow: '0px 0px 8px 6px rgba(0, 0, 0, 0.247)',
                transform: 'scale(1.03)'
            }}
        >
            <CardHeader display='flex' justifyContent='center'>
                <Heading
                    w='70%'
                    top='-5px'
                    p='0.5rem'
                    bg='#8595ad'
                    color='white'
                    fontSize='1rem'
                    textAlign='center'
                    fontWeight='medium'
                    position='absolute'
                    borderBottomRadius={10}
                >
                    Solar Standart GD Estadual
                </Heading>
            </CardHeader>

            <CardBody opacity='0.7' cursor='not-allowed'>
                <Stack textAlign='initial' mt='1rem' spacing='0.9rem'>
                    <Text fontSize='0.7rem' >
                        Feito para quem deseja explorar propriedades de estados específicos do Brasil e encontrar aquelas com as melhores características para implantação de usinas solares.
                    </Text>
                    <Text fontSize='0.7rem'>
                        O plano disponibiliza um estado à sua escolha para pesquisa de propriedades.
                    </Text>

                    <Text
                        display='flex'
                        color='blue.700'
                        fontWeight='bold'
                        fontSize='1.5rem'
                        alignItems='baseline'
                        justifyContent='center'
                    >
                        Em breve
                    </Text>
                </Stack>
                <Divider border='1px' borderColor='gray.700' />

                <List spacing={4} textAlign='initial' mt='1rem'>
                    <ListItem fontSize='0.9rem'>
                        <ListIcon fontSize='1.5rem' as={FcCheckmark} />
                        Apenas 01 estado disponível
                    </ListItem>
                    <ListItem fontSize='0.9rem'>
                        <ListIcon fontSize='1.5rem' as={FcCheckmark} />
                        Exibe todas as propriedades georreferenciadas
                    </ListItem>
                    <ListItem fontSize='0.9rem'>
                        <ListIcon fontSize='1.5rem' as={FcCheckmark} />
                        Plano mensal ou anual
                    </ListItem>

                </List>
            </CardBody>

            <CardFooter w='100%' >
                <Button
                    isDisabled
                    width='100%'
                    border='1px'
                    variant='outline'
                    transition='0.4s'
                    _hover={{ borderColor: 'background', bg: 'background', color: 'gray.10' }}
                    onClick={() => navigate('/create?plan=paid')}
                >
                    Contratar agora
                </Button>
            </CardFooter>
        </Card>
    )
}