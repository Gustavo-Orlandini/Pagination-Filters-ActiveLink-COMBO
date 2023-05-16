import { Button, ButtonProps, Icon, Text } from "@chakra-ui/react";
import { TiArrowUnsorted, TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

interface FilterColunmComponentProps extends ButtonProps {
    text: string;
    order?: string;
    hasNoIcons?: boolean;
    asName?: boolean;
}

export function FilterColunmComponent({ text, order, hasNoIcons, asName, ...rest }: FilterColunmComponentProps) {

    let icon = TiArrowUnsorted

    if (order === 'asc') {
        icon = TiArrowSortedUp
    } else if (order === 'desc') {
        icon = TiArrowSortedDown
    }

    return (
        <Button
            display='flex'
            justifyContent={asName ? "flex-start" : "center"}
            alignItems='center'
            bg='white'
            {...rest}
        >
            <Text fontWeight='bold' fontSize='0.8rem' mr='0.3rem'>{text}</Text>
            {
                (!hasNoIcons) && <Icon as={icon} fontSize='1rem' />
            }

        </Button>
    )
}