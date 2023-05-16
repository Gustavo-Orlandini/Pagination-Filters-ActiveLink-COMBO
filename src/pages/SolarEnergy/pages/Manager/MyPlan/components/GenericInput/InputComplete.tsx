import { FormControl, FormLabel, Icon, Input as ChakraInput, InputGroup, InputProps as ChakraInputProps, InputRightElement } from "@chakra-ui/react";
import { ElementType } from "react";
import { forwardRef } from "react";

interface InputProps extends ChakraInputProps {
    icon: ElementType;
    name: string;
    label?: string;
    type?: string;
    placeholder?: string;
    fontW?: string;
    color?: string;
    register?: (Ref: HTMLInputElement) => void;
    hasIcon: boolean;
}

const InputBase = ({ name, color, label, placeholder, type, icon, fontW, register, hasIcon, ...rest }: InputProps) => {
    return (
        <FormControl >

            {!!label && <FormLabel color={color} fontSize='0.9rem' fontWeight={fontW} htmlFor={name}>{label}</FormLabel>}

            <InputGroup >
                <ChakraInput
                    id={name}
                    name={name}
                    type={type}
                    bg='white'
                    fontSize='0.8rem'
                    borderRadius='5px'
                    focusBorderColor='red.500'
                    placeholder={placeholder}
                    border='1px'
                    transition='0.3s'
                    _placeholder={{ opacity: '0.5', color: 'inherit' }}
                    borderColor='secondary.200'
                    _hover={{
                        bgColor: 'secondary.200'
                    }}
                    {...rest}
                />
                {hasIcon ? (
                    <InputRightElement>
                        <Icon fontSize='1.2rem' color='#5388A4' as={icon} />
                    </InputRightElement>
                ) : ('')
                }
            </InputGroup>
        </FormControl>
    )
}

export const InputComplete = forwardRef(InputBase)