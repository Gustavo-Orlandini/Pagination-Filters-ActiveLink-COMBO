import { Button, Center, HStack, Icon } from "@chakra-ui/react";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

interface PaginationProps {
    pages: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

export function Pagination({ pages, currentPage, setCurrentPage }: PaginationProps) {

    const MAX_PAGES = 4; // número máximo de páginas exibidas

    const getPageIndexes = () => {
        if (pages <= MAX_PAGES) {
            return Array.from(Array(pages), (_, i) => i);
        }
        const start = Math.max(0, currentPage - Math.floor(MAX_PAGES / 2));
        const end = Math.min(pages, start + MAX_PAGES);
        return Array.from(Array(end - start), (_, i) => start + i);
    };

    const handleClick = (index: number) => {
        setCurrentPage(index);
    };

    const pageIndexes = getPageIndexes();

    return (
        <Center py='4rem' gap='1rem' >

            <HStack spacing={2}>
                {currentPage > 0 && (
                    <Button
                        size='sm'
                        border='1px'
                        bg='gray.10'
                        fontSize='0.8rem'
                        transition='all 0.3s'
                        borderColor='secondary.500'
                        value={currentPage - 1}
                        borderRadius={2}
                        onClick={() => handleClick(currentPage - 1)}
                        _hover={{ transform: 'scale(1.17)', background: '#5388a437' }}
                    >
                        <Icon as={MdOutlineArrowBackIos} />
                    </Button>
                )}

                {pageIndexes.map((index) => (
                    <Button
                        key={index}
                        size='sm'
                        border='1px'
                        bg='gray.10'
                        fontSize='0.8rem'
                        transition='all 0.3s'
                        borderColor='secondary.500'
                        value={index}
                        borderRadius={2}
                        onClick={() => handleClick(index)}
                        _hover={{ transform: 'scale(1.17)', background: '#5388a437' }}
                        style={index === currentPage ? { background: '#5388A4', color: 'white' } : {}}
                    >
                        {index + 1}
                    </Button>
                ))}

                {currentPage < pages - 1 && (
                    <Button
                        size='sm'
                        border='1px'
                        bg='gray.10'
                        fontSize='0.8rem'
                        transition='all 0.3s'
                        borderColor='secondary.500'
                        value={currentPage + 1}
                        borderRadius={2}
                        onClick={() => handleClick(currentPage + 1)}
                        _hover={{ transform: 'scale(1.17)', background: '#5388a437' }}
                    >
                        <Icon as={MdOutlineArrowForwardIos} />
                    </Button>
                )}
            </HStack>
        </Center>
    )
}