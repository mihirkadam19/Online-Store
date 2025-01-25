import { Button, Container, Flex, HStack, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { FaRegPlusSquare } from "react-icons/fa";
import { Link, Links } from 'react-router-dom';
import {IoMoon} from 'react-icons/io5';
import {LuSun} from 'react-icons/lu';
import { FaHome } from "react-icons/fa";


const Navbar = () => {
    const {colorMode, toggleColorMode} = useColorMode();
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
            >
                <Link to={"/"}>Product Store 🛒</Link>
            </Text>
            <HStack spacing={2} alignItems={"center"}>

                <Link to={"/"}>
                    <Button>
                        <FaHome fontSize={20} />
                    </Button>
                </Link>

                <Link to={"/create"}>
                    <Button>
                        <FaRegPlusSquare fontSize={20}/>
                    </Button>
                </Link>

                <Button
                    onClick={toggleColorMode}>
                        {colorMode=="light" ? <IoMoon fontSize={20} />: <LuSun fontSize={20}/>}
                </Button>

            </HStack>
        </Flex>
    </Container>    
  )
}

export default Navbar; 
