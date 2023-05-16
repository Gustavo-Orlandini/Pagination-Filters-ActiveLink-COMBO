import { FormControl, FormLabel, Icon, Input as ChakraInput, InputGroup, InputProps as ChakraInputProps, InputRightElement } from "@chakra-ui/react";
import React from "react";
import { forwardRef } from "react";
import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs'

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    placeholder?: string;
    fontW?: string;
    register?: (Ref: HTMLInputElement) => void;
}

const InputBase = ({ name, label, placeholder, fontW, register, ...rest }: InputProps) => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <FormControl >

            {!!label && <FormLabel fontSize='0.9rem' fontWeight={fontW} htmlFor={name}>{label}</FormLabel>}

            <InputGroup>
                <ChakraInput
                    id={name}
                    name={name}
                    type={show ? 'text' : 'password'}
                    fontSize='0.8rem'
                    borderRadius='5px'
                    focusBorderColor='red.500'
                    placeholder={placeholder}
                    transition='0.3s'
                    _placeholder={{ opacity: '0.5' }}
                    bgColor='white'
                    border='1px'
                    borderColor='secondary.500'
                    _hover={{
                        bgColor: 'secondary.200'
                    }}
                    {...rest}
                />
                <InputRightElement>
                    <Icon fontSize='1.2rem' color='#5388A4' as={show ? BsEyeSlashFill : BsEyeFill} onClick={handleClick} />
                </InputRightElement>
            </InputGroup>
        </FormControl>
    )
}

export const PasswordInput = forwardRef(InputBase)