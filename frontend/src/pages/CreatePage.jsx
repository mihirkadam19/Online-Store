import { Box, Button, Container, Heading, Input, useColorModeValue, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { use } from 'react';

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price:"",
        image:""
    
    })

    const handleAddProduct = () => {
        console.log(newProduct);
    }

    return (
        <Container maxW={"container.sm"} px={5}>
            <VStack
                spacing={5}
            >
                <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
                    Create Product Listing
                </Heading>

                <Box
                    w={"full"} bg={useColorModeValue("white","gray.800")}
                    p={6} rounded={"lg"} shadow={"md"}
                >
                    <VStack>
                        <Input
                            placeholder='Product Name'
                            name='productName'
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                        />

                        <Input
                            placeholder='Price'
                            name='productPrice'
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                        />

                        <Input
                            placeholder='Image URI'
                            name='productImageUri'
                            value={newProduct.image}
                            onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                        />

                        <Button padding={5} bg={useColorModeValue("blue.500", "blue.700")} color={useColorModeValue("blackAlpha.700","white")} onClick={handleAddProduct}>
                            Submit
                        </Button>
                    </VStack>
                </Box>

            </VStack>

        </Container>
    )
}

export default CreatePage;
