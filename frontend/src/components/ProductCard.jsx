import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Heading, Image, Text, useColorModeValue, HStack, IconButton, useToast } from '@chakra-ui/react';
import React from 'react'
import { useProductStore } from "../store/product";

const ProductCard = ({product}) => {
    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");

    const {deleteProduct} = useProductStore();
    const toast = useToast();

    const handleDelete = async(pid) => {
        const {success, message} = await deleteProduct(pid);
        toast({
            title: success== true ? "Deletion Success" : "Deletion Faliure",
            description: message,
            status: success==true ? "success" : "error"
        });
    };
  return (
    <Box
        shadow={'lg'}
        rounded={'lg'}
        overflow={'hidden'}
        transition={'all 0.3s'}
        _hover={{ transform: "traslateY(-5px)", shadow: "xl"}}
        bg={bg}
    >
        <Image src={product.image} alt={product.name} h={48} w={'full'} objectFit={'cover'} />
        <Box p={4}>
            <HStack justifyContent={"space-between"}>
                <Heading as={'h3'} size={'md'} mb={2}>
                    {product.name}
                </Heading>
                <Text fontWeight={'bold'} fontSize={'xl'} color={textColor} mb={4}>
                    $ {product.price}
                </Text>
            </HStack>
            
            <HStack spacing={2}>
                <IconButton icon={<EditIcon />} colorScheme='blue' />
                <IconButton
                    icon={<DeleteIcon />}
                    onClick={() => handleDelete(product._id)}
                    colorScheme='red'
                />
            </HStack>
        </Box>
    </Box>
  );
}

export default ProductCard
