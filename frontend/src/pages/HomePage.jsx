import { Container, Flex, Icon, Text, VStack, SimpleGrid, Box, useColorMode } from '@chakra-ui/react';
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
        </VStack>
        <SimpleGrid mt={6} columns={2} spacingX='30px' spacingY='30px'>
            <Box bg = {colorMode=='light' ? "gray.400" : "blue.800"}
                height='140px' borderRadius={"md"}></Box>
        </SimpleGrid>
    </Container>
  );
}

export default HomePage;
