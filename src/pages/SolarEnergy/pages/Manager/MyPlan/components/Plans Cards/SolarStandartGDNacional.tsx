import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Heading, List, ListIcon, ListItem, Spinner, Stack, Text, VStack } from "@chakra-ui/react";
import { FcCheckmark } from "react-icons/fc";
import { useCreateCheckoutSession } from "../../../../../../../api/useCreateCheckoutSession";
import { useAuth } from "../../../../../../../hooks/useAuth";

export function SolarStandartGDNacional() {
    const { handleClickToBuy, loading } = useCreateCheckoutSession();
    const { currentUser } = useAuth();
    const name = currentUser?.displayName || 'Teste';
    const email = currentUser?.email || '';
    const productId = 'prod_NpngSbudaZJiDp'

    async function handleBuyNacionalPlan() {
        const response = await handleClickToBuy({ name, email, productId })
        window.open(response.checkoutUrl, '_blank');
    }

    return (
        <Card
            maxW='md'
            h='37rem'
            border='4px'
            transition='0.4s'
            borderColor='blue.700'
            boxShadow='4px 4px 4px rgba(0, 0, 0, 0.1)'
            borderRadius={5}
            _hover={{
                boxShadow: '0px 0px 8px 6px rgba(0, 0, 0, 0.247)',
                transform: 'scale(1.03)'
            }}
        >
            <CardHeader display='flex' justifyContent='center'>
                <Heading
                    fontSize='1rem'
                    fontWeight='normal'
                    bg='blue.700'
                    p='0.5rem'
                    w='70%'
                    textAlign='center'
                    color='white'
                    borderBottomRadius={10}
                    top='-5px'
                    position='absolute'
                >
                    Solar Standart GD Nacional
                </Heading>
            </CardHeader>

            <CardBody>
                <Stack textAlign='initial' mt='1rem' spacing='0.9rem'>
                    <Text fontSize='0.8rem' >
                        Feito para quem deseja ter a experiência completa, explorar todas as propriedades do Brasil e encontrar aquelas com as melhores características para implantação de usinas solares.
                    </Text>
                    <VStack spacing='0.2rem'>
                        <Text
                            display='flex'
                            fontSize='0.8rem'
                            alignItems='baseline'
                            justifyContent='center'
                        >
                            De:
                            <Text
                                as='del'
                                ml='0.3rem'
                                color='black'
                                fontSize='0.8rem'
                                fontWeight='normal'
                            >R$ 2.000,</Text>
                        </Text>

                        <Text
                            display='flex'
                            color='blue.700'
                            fontWeight='bold'
                            fontSize='1.5rem'
                            alignItems='baseline'
                            justifyContent='center'
                        >
                            R$ 1.600,
                            <Text
                                ml='0.5rem'
                                color='black'
                                fontSize='0.8rem'
                                fontWeight='normal'
                            >/mês</Text>
                        </Text>
                    </VStack>
                </Stack>
                <Divider border='1px' borderColor='gray.700' />

                <List spacing={4} textAlign='initial' mt='1rem'>
                    <ListItem fontSize='0.9rem'>
                        <ListIcon fontSize='1.5rem' as={FcCheckmark} />
                        Fonte: Solar
                    </ListItem>
                    <ListItem fontSize='0.9rem'>
                        <ListIcon fontSize='1.5rem' as={FcCheckmark} />
                        Ambiente Regulatório: Geração Distribuída
                    </ListItem>
                    <ListItem fontSize='0.9rem'>
                        <ListIcon fontSize='1.5rem' as={FcCheckmark} />
                        Perfil de Usuário: Desenvolvedor
                    </ListItem>

                </List>
            </CardBody>

            <CardFooter w='100%' >
                <Button
                    w='100%'
                    mt='1rem'
                    border="1px"
                    type="submit"
                    color="white"
                    bg="third.600"
                    fontWeight="medium"
                    borderColor="secondary.200"
                    borderRadius={5}
                    isDisabled={loading}
                    _hover={{ bg: "third.500" }}
                    onClick={handleBuyNacionalPlan}
                >
                    {loading ? <Spinner /> : <Text>Contratar agora</Text>}
                </Button>
            </CardFooter>
        </Card>
    )
}