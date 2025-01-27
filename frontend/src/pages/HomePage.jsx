import { Container, Flex, Icon, Text, VStack, SimpleGrid, Box, useColorMode } from '@chakra-ui/react';
import { Link, Links } from 'react-router-dom';
import { color } from 'framer-motion';
import React, { useEffect } from 'react';
import { MdOutlineStorefront } from "react-icons/md";
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
    const {colorMode, toggleColorMode} = useColorMode();
    const { fetchProducts, products } = useProductStore();
    
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);
    console.log("products",products); 

    return (
        <Container maxW={"container.xl"}>
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
                
                <SimpleGrid
                    columns={{
                        base:1,
                        md: 2,
                        lg: 3,
                    }}
                    spacing={10}
                    w={"full"}
                    p={6}
                >
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </SimpleGrid>


                {products.length === 0 && (
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
                )}
                
            </VStack>
        </Container>
    );
}

export default HomePage;
