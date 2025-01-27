import { Container, Flex, Icon, Text, VStack, SimpleGrid, Box, useColorMode } from '@chakra-ui/react';
import { Link, Links } from 'react-router-dom';
import { color } from 'framer-motion';
import React from 'react';
import { MdOutlineStorefront } from "react-icons/md";

const HomePage = () => {
    const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Container maxW={"container.md"}>
        <VStack >
            <Flex
                align={"center"}
                justify={"center"}
                gap={2}
            >
                <Text
                    fontSize={{ base: "22", sm: "28" }}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    textAlign={"center"}
                    bgGradient={"linear(to-r, blue.500, green.300, cyan.400)"}
                    bgClip={"text"}
                    _hover={{
                        bgGradient:"linear(to-r, cyan.700, green.500, blue.400)"
                    }}
                >
                    Current Products
                </Text>
                <Icon as={MdOutlineStorefront} fontSize={27} color="cyan.400" _hover={{color: "blue.400"}} />
            </Flex>

            <Text
                fontSize={'xl'}
                fontWeight={"semibold"}
                fontStyle={"italic"}
                color={"gray.500"}
            >
                No Products Found 😢 {" "}
                <Link to={"/create"}>
                        <Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
							Create a product
                        </Text>
                </Link>
            </Text>
        </VStack>
    </Container>
  );
}

export default HomePage;
