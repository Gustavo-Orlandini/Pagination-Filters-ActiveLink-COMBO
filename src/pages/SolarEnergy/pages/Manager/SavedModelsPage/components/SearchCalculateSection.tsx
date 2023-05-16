import { Box, Center, HStack, Select, Stack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { FilterColunmComponent } from "./FilterColunmComponent";
import { TableModelCardComponent } from "./TableModelCardComponent";
import fakeServer from '../../../../../../mocks/fake-server.json'
import { Pagination } from "./Pagination";
import NotFoundLottie from '../../../../../../assets/Lotties/notFound.json'
import { Player } from "@lottiefiles/react-lottie-player";
import { useTableSort } from "../../../../../../hooks/useTableFilter";
import { usePagination } from "../../../../../../hooks/usePagination";


export function SearchCalculateSection() {
    const { dataSorted, handleSort, sorter } = useTableSort(fakeServer);
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const itensPerPage = 10

    function parseLocation(location: string) {
        const [city, state] = location.split(' - ');
        return { city, state };
    }

    const locations = dataSorted.map((item) => parseLocation(item.local));
    const states = Array.from(new Set(locations.map((item) => item.state)));

    const filteredCities = Array.from(new Set(locations.filter(
        (location) => location.state === state
    ).map(item => item.city)));

    const filteredData = dataSorted.filter((item) => {
        const { city: itemCity, state: itemState } = parseLocation(item.local);
        return (!city || itemCity === city) && (!state || itemState === state);
    })

    const { currentPage, totalPages, currentData, goToPage } = usePagination(
        filteredData,
        itensPerPage,
    );
    return (
        <Box w='100%' px='2rem' mb="3rem" mx='auto' overflow='auto'>
            <VStack w='100%' align="left" mt='3.5rem'>
                <Box as='header'>
                    <Text as='h1' fontWeight='bold' fontSize='2rem' >Meus Pedidos</Text>
                    <Text as='h3' fontWeight='bold' fontSize='1.5rem' mt='2rem' >Pedidos realizados</Text>
                    <Text fontSize='0.8rem' mt='0.8rem' >Encontre e filtre as compras já efetuadas.</Text>
                </Box>
                <HStack spacing='0.8rem' pt='2rem'>

                    <Select
                        placeholder='Estado'
                        size='sm'
                        w='7rem'
                        _hover={{ bg: 'secondary.200' }}
                        cursor='pointer'
                        value={state}
                        _focusVisible={{ borderColor: 'third.500' }}
                        borderRadius={5}
                        onChange={(e) => {
                            setState(e.target.value)
                            setCity('')
                        }}>
                        {states.map((state) => (
                            <option key={state} value={state}>
                                {state}
                            </option>
                        ))}
                    </Select>

                    <Select
                        placeholder='Selecione uma cidade'
                        size='sm'
                        w='21rem'
                        value={city}
                        isDisabled={!state}
                        _hover={{ bg: 'secondary.200' }}
                        cursor='pointer'
                        _focusVisible={{ borderColor: 'third.500' }}
                        borderRadius={5}
                        onChange={(e) => setCity(e.target.value)}
                    >
                        {filteredCities.map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))}
                    </Select>

                </HStack>
            </VStack>

            <HStack py={2} spacing={2} mt='3.5rem' >
                <FilterColunmComponent
                    w='33.5%'
                    asName text='Nome'
                    onClick={() => handleSort('name')}
                    order={sorter.name === 'name' ? sorter.dir : ''}
                />
                <FilterColunmComponent
                    w='16.6%'
                    text='Local'
                    onClick={() => handleSort('local')}
                    order={sorter.name === 'local' ? sorter.dir : ''}
                />
                <FilterColunmComponent
                    w='12.2%'
                    text='Desconto Obtido'
                    onClick={() => handleSort('tirShed')}
                    order={sorter.name === 'tirShed' ? sorter.dir : ''}
                />
                <FilterColunmComponent
                    w='12%'
                    text='Lucro Obtido'
                    onClick={() => handleSort('tirTracker')}
                    order={sorter.name === 'tirTracker' ? sorter.dir : ''}
                />
                <FilterColunmComponent
                    w='12%'
                    text='Data'
                    onClick={() => handleSort('data')}
                    order={sorter.name === 'data' ? sorter.dir : ''}
                />
                <FilterColunmComponent
                    text='Ações' hasNoIcons w='10%' />
            </HStack>

            <Stack spacing={4} w='100%'>
                {currentData.map((item) => (
                    <TableModelCardComponent key={item?.id} item={item} />
                ))}
            </Stack>
            {
                totalPages >= 1 ? (
                    <Center>
                        <Pagination
                            pages={totalPages}
                            currentPage={currentPage}
                            setCurrentPage={goToPage}
                        />

                    </Center>
                ) : (
                    <Center mt='3rem'>
                        <Player
                            loop
                            autoplay
                            src={NotFoundLottie}
                            style={{ height: '150px', width: '150px' }}
                        >
                            <Text as='strong' color=''>Você ainda não salvou nenhum cálculo de modelagem</Text>
                        </Player>
                    </Center>
                )
            }
        </Box >
    );
}