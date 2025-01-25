import { Button, Container, Flex, HStack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { FaRegPlusSquare } from "react-icons/fa";
import { Link, Links } from 'react-router-dom';
import {IoMoon} from 'react-icons/io5';
import {LuSun} from 'react-icons/lu';
import { FaHome } from "react-icons/fa";
import { keyframes } from "@emotion/react";


const Navbar = () => {
    const {colorMode, toggleColorMode} = useColorMode();

    const rattle = keyframes`
        0% { transform: rotate(0deg); }
        20% { transform: rotate(-10deg); }
        40% { transform: rotate(10deg); }
        60% { transform: rotate(-10deg); }
        80% { transform: rotate(10deg); }
        100% {transform: rotate(180deg);}
        `;

  return (
    <Container maxW={"1140px"} px={"4"}> 
        <Flex
            h={"16"}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base : "column",
                sm: "row"
            }}
        >
            <Text
                fontSize={{ base: "22", sm: "28" }}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                textAlign={"center"}
                bgGradient={"linear(to-r, cyan.700, green.500, blue.400)"}
                bgClip={"text"}
                _hover={{
                    bgGradient:"linear(to-r, blue.700, green.300, cyan.400)"
                }}
            >
                <Link to={"/"}>Product Store 🛒</Link>
            </Text>
            <HStack spacing={2} alignItems={"center"}>

                <Link to={"/"}>
                    <Button
                        _hover={{
                            animation: `${rattle} 0.5s ease-in-out`,
                            transformOrigin: "center",
                        }}
                    >
                        <FaHome fontSize={20} />
                    </Button>
                </Link>

                <Link to={"/create"}>
                    <Button
                        _hover={{color:"green.200", transform: "scale(1.05)"}}
                    >
                        <FaRegPlusSquare fontSize={20}/>
                    </Button>
                </Link>

                <Button
                    onClick={toggleColorMode}
                    _hover={{transform: useColorModeValue("scale(0.90)","scale(1.1)")}}    
                >
                        {colorMode=="light" ? <IoMoon color='orange' fontSize={20} />: <LuSun color='yellow' fontSize={20}/>}
                </Button>

            </HStack>
        </Flex>
    </Container>    
  )
}

export default Navbar; 
